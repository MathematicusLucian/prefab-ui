# Headless CMS

## Overview
- [Formio](https://github.com/formio)
- AWS seems a little heavyweight for a blog CMS. Instead, utilised [Cloudflare Workers platform](https://dash.cloudflare.com/sign-up), as per [Sonic.js Headless CMS](https://sonicjs.com) - 6 times faster 🔥🔥🔥 than a standard Node.js application.
  | Platform      | Average Response Time | Difference |
  | ----------- | ----------- | ----------- |
  | Strapi      | 342.1ms       | - baseline - |
  | Node + Postgres   | 320.2ms        | 1.06x Faster|
  | SonicJs   | 52.7ms        | 6.4x Faster|
- [Drizzle](https://orm.drizzle.team/): Open source ORM to write plain SQL (or use the API.)
- [Hono](https://hono.dev/): For API routing.

## Prerequisites
1. A free [Cloudflare account](https://dash.cloudflare.com/sign-up)
1. Install [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

## Getting Started
```
npm run dev
```
Admin interface:
[http://localhost:8788](http://localhost:8788)

## Authentication

**Important:** There are two options for how passwords are stored (key derivation functions), set by the AUTH_KDF env variable. These effect the security of your passwords if they were to ever leak, as well as how much cpu time is used when a user is created, changes their password, or logs in. 

**AUTH_KDF="pbkdf2"**
  - The default if no env variable is set
  - Faster than scrypt, but less secure
  - Uses about 80-100ms CPU time
  - Recommended if on cloudflare workers free plan. (Since Cloudflare allows rollover CPU time you are unlikely to get an Exceeded CPU Limits error, but you can adjust the options below to potentially use less CPU time.)
  - Can adjust iterations with the AUTH_ITERATIONS env variable (default and max 100000)
  - Can adjust hash with the AUTH_HASH env variable ("SHA_256", "SHA-384" or "SHA-512" ("SHA-512" is the default))

**AUTH_KDF="scrypt"**
  - Slower than pbkdf2, but more secure
  - Uses about 300-400ms CPU time
  - Recommended if on cloudflare workers paid plan

If you change your auth options old users will still be able to login but the encryption won't change for their password until they change their password.

[https://sonicjs.com/environment-variables](https://sonicjs.com/environment-variables)

### Setup a user
  1. When one first opens the app, one will be prompted to create an admin user
  1. Create the user and save. Will be redirected to login
  1. Login
  1. Thus, admin dashboard for CRUD operations
  1. To authorize via the API post to /v1/auth/login with the email and password in the body
    ```json
    {
      "email": "user@sonicjs.com",
      "password": "password123"
    }
    ```
  1. The API will return a bearer token
      ```json
      {
        "bearer": "eo0t9q52njemo83rm1qktr6kwjh8zu5o3vma1g6j"
      }
      ```
  1. Then add that bearer token to the Authorization header on future requests
      ```js
       const url = "http://localhost:8788/v1/posts/c1d462a4-fd10-4bdb-bbf2-2b33a94f82aa";
       const data = {
         "data": {
             "title": "Test Post Update"
         }
       };
       const requestOptions = {
         method: 'PUT',
         headers: { 
             'Content-Type': 'application/json',
             'Authorization': 'Bearer eo0t9q52njemo83rm1qktr6kwjh8zu5o3vma1g6j'
         },
         body: JSON.stringify(data)
       };
       fetch(url, requestOptions)
      ```

### [Access Control Configuration](ACCESS-CONTROL.md)

See: [Access Control Readme](ACCESS-CONTROL.md)

## Hooks

The `hooks` property on the `ApiConfig` type allows configuring functions that run at certain points in the request lifecycle.

### resolveInput

Allows transforming the input data before running a create or update operation. 

```ts
resolveInput: {
  create: (ctx: AppContext, data: any) => any | Promise<any>;
  update: (ctx: AppContext, id: string, data: any) => any | Promise<any>;
}
```

For example, it can be used to automatically populate the `userId` field based on the authenticated user:

```ts
resolveInput: {
  create: (ctx, data) => {
    if (ctx.get("user")?.userId) {
      data.userId = ctx.get("user").userId; 
    }
    return data;
  } 
}
```

The hooks receive the context (`ctx`) containing the request information, as well as the input `data`. They can return a Promise of the transformed data.

### beforeOperation

Runs before executing the database operation:

```ts  
beforeOperation?: (
  ctx: AppContext,
  operation: "create" | "read" | "update" | "delete", 
  id?: string,
  data?: any  
) => void | Promise<void>;
```

It receives:

- `ctx` - the context
- `operation` - the operation being performed 
- `id` - the document ID (if applies)
- `data` - the input data (if applies)

For example, it can be used for logging.

### afterOperation

Runs after executing the database operation:  

```ts
afterOperation?: (
  ctx: AppContext,
  operation: "create" | "read" | "update" | "delete", 
  id?: string,
  data?: any,
  result?: { data?: any } & Record<string, any>  
) => void | Promise<void>;
```
 
It receives:

- `ctx` - the context
- `operation` - the operation performed
- `id` - the document ID (if applies) 
- `data` - the input data (if applies)
- `result` - the operation result