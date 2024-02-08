# [mathematicuslucian.com](https://mathematicuslucian.com/)

***Alternate link:***
[portfolio-mathematicus-lucian.web.app](https://portfolio-mathematicus-lucian.web.app)

This is my portfolio website (which I am [refactoring](https://refactoring.com/) to be more dynamic.) 

The object of this project is to explore the potential to harness a library of resuable blocks (components; chunks of code) representating functionality (which you could pair with [Storybook](https://storybook.js.org/)) in such a manner that they can easily be 'clicked' together to create more than one website. Greater potential for utilisation of such a library is opened by by options to apply several themes to the same components. This follows in the spirit of computer science to avoid duplication of effort, e.g. methods/functions, Object-Oriented Programming/classes, [smart/dumb components](https://www.jetbrains.com/guide/javascript/tutorials/react_typescript_tdd/presentation_components/), [micro-frontends](https://martinfowler.com/articles/micro-frontends.html), etc.. 

***Part of the broader Portfolio, and Prefab, projects. Currently demonstrates utilisation of:***
- Angular 17
    - Reusable [standalone components](https://angular.io/guide/standalone-components)
    - Angular [Control Flow](https://angular.io/guide/control_flow)
    - [NgRx](https://v8.ngrx.io/docs) (and RxJS)
- UI component library that demonstrates [TailwindCSS](https://tailwindcss.com/) implementation. 
    - Presented via [Storybook](https://storybook.js.org/)
    - Desktop/mobile-friendly CSS / UX, e.g. top nav adapts (also, hamburger toggle icon)
- Micro-frontends (UI equivalent of microservices): [Single-Spa](https://single-spa.js.org/), with [Module Federation](https://webpack.js.org/concepts/module-federation/) (limited use of [SystemJS](https://github.com/systemjs/systemjs))
    - Layout engine
    - [Single-Spa with Angular](https://single-spa.js.org/docs/ecosystem-angular/) re-configured for standalone components, i.e. no App Module
- REST API calls
- Google Firebase Firestore. 
    - (Work-in-progress: Python middleware to load from MongoDB option: [portfolio-data-service-fastapi](https://github.com/MathematicusLucian/portfolio-data-service-fastapi) - intent being to publish as AWS Lambda or Google Functions a few microservices acting as a [BFF](https://aws.amazon.com/blogs/mobile/backends-for-frontends-pattern/).)
- Guard to limit access: [TinyMCE](https://www.tiny.cloud/) to edit blog posts / loading of HTML segments from NoSQL database
- Unit Testing (TDD) - [Jasmine](https://jasmine.github.io/); with [Scuri](https://github.com/gparlakov/scuri) boilerplates; and [Jasmine AutoSpies](https://www.npmjs.com/package/jasmine-auto-spies)

## Problem Statement

![lego movie](./packages/prefab-blog/src/assets/imgs/lego.jpeg)

**Avoiding Duplication of Effort:** Working over the last two decades as a software engineer, and a Head of Engineering, too often I have seen short-tempered project managers pressuring developers to do extreme overtime, while essentially directing they write the same code over and over. I noticed that these were nonetheless often assembled for only one purpose. Different teams in the same organisation would create their own series of bespoke blocks, when they could, for example, have used the same button component, especially as the company ideally would have a common colour scheme, etc. for their websites. 'Duplication of effort.' There are vast opportunities to achieve ['economies in scale'](https://en.wikipedia.org/wiki/Economies_of_scale); a concept that arose in the works of [Adam Smith](https://en.wikipedia.org/wiki/Adam_Smith).

## The Concept

As I worked with the component-driven architecture approach of systems like [React](https://react.dev/), [Angular](https://angular.io/), Vue, Svelte, etc. it struck me that these components, for example, a button component, are akin to ['Lego blocks'](https://en.wikipedia.org/wiki/Lego) in that they are grouped together to form websites. As a small child, I was fascinated by the toy Lego, where a range of blocks could be used to build cars, houses, and combined with electronics, even more potential. The blocks were for example 2 dots by 4 dots in size. Another was 1 dot by 8 dots. These can be assembled to create by a young engineer to create a great number of inventions unique in his/her nascent, growing mind. A cable car to climb to the upstairs of our home. A motorised, 'remote control' truck. Etc. Etc. All built from the same reusable blocks.

![prefab house](./packages/prefab-blog/src/assets/imgs/atomic-design.png)

**Atomic Design System:**

For example, a 'Lego block' equivalent could be button functionality. Another block may be a text input field. Another may be a datepicker. Following the [atomic design approach](https://bradfrost.com/blog/post/atomic-web-design/), blocks can be connected to create, for example, a form. These larger chunks of reusable code (that being functionality) are referred to as molecules. A schema for said form can be saved, rather akin to Lego build instructions, and then reutilised for many purposes.

![lego_instructions](./packages/prefab-blog/src/assets/imgs/lego_instructions.png)

## UI Component Library

***[Storybook](https://storybook.js.org/):*** Presents the UI component library.

***Graphic/UX designers:*** If one is relying on such a component library, and one that can utilise more than one theme, then the opportunity arises to align with the effort of UI visual designers, e.g. a UX designer can design a workflow, colour schemes, 'calls to action', etc. that reflect various aspects of psychology, such as the 'hook model'. If this design is built such that it can be applied to the component library, there opportunity exists to export such from a system such as Figma, and utilising a CSS styling system, such as [TailwindCSS](https://tailwindcss.com/), to deploy the design. This would essentially mean that with limited (if any) technical knowledge, or often no code changes, amd in a similar fashion to say Wordpress, or Wix, stakeholders could deploy a great deal of functionality, and in a similar fashion to a [CMS](https://en.wikipedia.org/wiki/Content_management_system), make a great number of tweaks.

![prefab](./packages/prefab-blog/src/assets/imgs/prefab-house.png)

## Organisms, Templates, and Pages

This grouping of items can be developed further, bringing these reusable components together as sections of a page, which are reffered to as an 'orgamism'. For example, one type of molecule may be a short description of a blog post, while an organism may be the list of blog posts. Together with a header organism, this 'blog posts list' organism may be part of a 'blog' page. Even, such pages could form the entire UI of a website or mobile app. This being akin to how a construction site could assemble a house brick by brick, or use prefabricated sections created in a factory. This is an opportunity for 'economies of scale', i.e. the cost-savings by mass-production of prefabricated sections. This is even greater in digital construction, because one can, to describe this in a crude, simplified fashion, 'copy and paste' sections, or that is, deploy a new instance of the objects within minimal investment (except mostly hosting infrastructure, etc..)

### Micro-frontends

In the spirit of 'lazy-loading' components, we only need to load a 'module', if we required. In the spirit of microserives, a UI need not be one app, just as a back-end can be a collection of microservices. If UI modules are seperated into apps, akin to Google Functions, and AWS Lmabdas, we only load what is required.

An organism, template, or page could be a micro-frontend, utilising technologies such as [Single-Spa](https://single-spa.js.org/), and/or [Module Federation](https://webpack.js.org/concepts/module-federation/), and supported by a microservice acting as a [BFF](https://aws.amazon.com/blogs/mobile/backends-for-frontends-pattern/). 

***SingleSpa***: A way of structuring routes to accommodate microfrontends.

*Approach:*
- SystemJS + import maps as a module loader for the microfrontends. Each SingleSpa application should be an in-browser Javascript module (imports and exports are not compiled away by your build tool, but instead are resolved within the browser.)
- SystemJS is only polyfill-like :. compile applications into System.register format instead of to ESM format (or investigate [es-module-shims](https://github.com/guybedford/es-module-shims).)
- Each large shared-dependency (ie, the Angular, React, Vue, etc. libraries) should also be an in-browser module.
- Everything else should be a build-time module.
- SingleSpa loading functions for built-in lazy loading for applications and parcels. (If necessary, lazy loading via "code splits" with bundler (webpack or rollup.))

***Module Federation***: A webpack-specific performance technique for microfrotends/sharing build-time modules. With each microfrontend bundling all of its dependencies, even the shared ones, there would be multiple copies of each shared dependency - one per microfrontend. To address this, in the browser, the first copy of the shared dependency will be downloaded, but subsequent microfrontends will reuse that shared dependency without downloading their copy of it.

## Data sources

This currently uses Firebase (alternate Supabase could be utilised.) I have partially-completed alternate data provision from two other data sources: DynamoDB, and MongoDB. (I am tempted to look at a SQL version too.) 

***[portfolio-data-service-fastapi](https://github.com/MathematicusLucian/portfolio-data-service-fastapi)***: For MongoDB, I have partially-written Python middle-ware to present data from MongoDB. 

## Potential progression

- Single-Spa shared styled-components
- Single-Spa Rxjs shared state
- Single-Spa [parcel](https://single-spa.js.org/docs/parcels-overview/) to demonstrate polyglot MFEs, e.g. with a React component
- [import-map-overrides](https://github.com/joeldenning/import-map-overrides/), to go to a deployed environment and override the [Import Map](https://github.com/WICG/import-maps) for just one microfrontend at a time. The import-map-overrides library is already loaded in the index.html of root-html-file, so you can start using it immediately. To makee the deployed environment overridable, just like you can do overrides on http://coexisting-angular-microfrontends.surge.sh
- The root-html-file project should also be in its own repo.
- Website search
- CMS-functionality (to edit blog)
- Login/admin access. User management.
- An excuse to demonstrate (CQRS)[https://martinfowler.com/bliki/CQRS.html] in my GitHub portfolio?
- Content-builder system (below)
- (GraphQL)[https://graphql.org/]; (Kafka)[https://kafka.apache.org/]; etc.
- Demonstrate polyglot MFEs
- Snowpack (smaller packages - akin to 'lazy-loading' concept)
- Deploy as Google functions/Lambdas
- CDN

---

## Coming soon... ``prefab-ui`` website content-builder / CMS engine:

**Job security:** How would this impact engineering roles? The world is moving this direction already, and I do not beleive my project has any influence on that. Over the last two decades, there have been systems such as Wordpress, Joomla, Wix, SquareSpace, etc., as it gets easier and easier for people to launch their own website. Nonetheless, few people do. Hypothetically, you could do you own accounts, but most businesses (or people earning over £100k; Self-Assessment) pay an accountant, for the 'peace of mind'. Many who can afford to opt to hire a gardener, when they are more than capable of planting some flowers, and reading up on how to care for them. The major impact of these advances in UI development will be that less skills would be required. This being in a market where consultancies focused on head count rather than reliability have pushed into the industry millions of 'copy pasta' 'script kiddies' produced by 'rote learning' at some of the lowest ranking univeristies that are little more than 'paper mills'. 

*(Project management 'ethos' embraces hiring of low-skilled technicians to create 'quick and dirty' fixes to meet arbitrary deadlines. That does not allow for a carefully-determined balance, an empirically-calculated risk management approach, i.e. consider the' big picture', with respect either to 'return on investment' to the business, or the criticality of technical systems reliability to repuation and client retention. However, it does create unnecessary situations to 'heroically' patch a fix, the 'fire drill' in response to failings of past rushed work, and drama to cover-up equivalents to Horizon scandals, [Boeing Spirit airplane doors](https://www.reuters.com/business/aerospace-defense/united-airlines-finds-loose-bolts-boeing-737-max-planes-2024-01-08/), and Challenger space ship explosions ([O-rings](https://en.wikipedia.org/wiki/Rogers_Commission_Report).)*

---

## Setup, etc. ...Blah de blah blah

### Local development -- one app at a time

With single-spa, it is preferred to run `ng serve` in only one single-spa application at a time, while using a deployed version of the other applications, rather than having to clone, npm install, or boot them up.

To try this out, clone the repo and run the following commands:
```sh
cd prefab-home
npm i && npm start
```

Click on the yellowish rectangle at the bottom right. Then click on `prefab-home`. Change the module url to http://localhost:4201/main.js. Then apply the override and reload the page. This will have change prefab-home to load from your localhost instead of from surge.sh. As you modify the code locally, it will reload the home page.

### Local development -- all at once

```sh
# First terminal tab
cd root-html-file
npm i && npm start
```
```sh
# Second terminal tab
cd prefab-home
npm i && npm start
```

```sh
# Third terminal tab
cd prefab-resume
npm i && npm start
```

```sh
# Fourth terminal tab
cd prefab-navbar
npm i && npm start
```

Now go to http://localhost:4200 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
root-html-file/index.html.

**Build**

Run `ng build` to build the project. The build artifacts will be stored in the `static/` directory.

**Deploy to Firebase**

The CLI command ``npm run deploy`` is configured in ``package.json`` to run the following commands, that build the app to the ``static/`` directory, and push those artifacts to Firebase:

`` ng build --configuration=production --aot && firebase deploy --only hosting ``

## Quality Assurance

**Linting**

- The CLI command ``npm run lint`` is configured in ``package.json`` to run [ESLint](https://eslint.org/).
- The CLI command ``npm run lint:fix`` is configured in ``package.json`` to run [ESLint](https://eslint.org/), and to automatically fix issues found.

**Running unit tests**

Run `ng test` to execute the unit tests.

(By default, an Angular app is configured for [Karma](https://karma-runner.github.io). I have utilised [Jasmine](https://jasmine.github.io/); with [Scuri](https://github.com/gparlakov/scuri) boilerplates; and [Jasmine AutoSpies](https://www.npmjs.com/package/jasmine-auto-spies). When working with React, I have used Jest.)

**Running end-to-end tests**

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

(This is not yet setup. In the past, I have preferred Protractor over Selenium, because it more robustly tests the actual UI. However, for a production app, these days, I would use [Playwright](https://playwright.dev/), or Cypress, to validate whether end-to-end UX flows meet requirements; and Postman to validate key endpoints. A catalogue of automated tests would be integrated to the CI/CD pipeline, to run (a) before deployment was permitted, and also, (b) post-deployment, a few run as 'smoke tests' of critical functionality.)

---

## Value streams

![value stream mapping](./packages/prefab-blog/src/assets/imgs/value-stream-mapping.png)

**Six Sigma:** There is the potential (a la Spotify model) for a [value stream](https://en.wikipedia.org/wiki/Value-stream_mapping) to be aligned with an 'organism' or 'page' in the atomic system, e.g. a steam to delivery a blog functionality utlised across the websites of 5 different clients. 

***[Value streams](https://www.atlassian.com/continuous-delivery/principles/value-stream-mapping):*** In contrast to the original Agile manifesto, often today, there are attempts for a 'one size fits all' rigid implementation of Scrum, though the 2-week sprints, etc., seem a little dated with CI/CD now 'old news', and the broader eco-system of many companies is far from ready, or even open, to a more Agile way of working. 

The underlying concepts/principles are missed by ['Cargo Cult Agile'](https://en.wikipedia.org/wiki/Cargo_cult_programming), i.e, this could be simplied as to prioritise requirements by value and to focus on those critical to get the project launched (How often did that ever happen, despite all the Sprint Planning meetings, etc.?), and do those first, but check-in reguarly with customers to check works heading in right direction (How often do they attend the Sprint Review?), i.e. meets perceived need Engineering teams are sometimes focussed on an engineering function, or as a project manager would see them in Waterfall, e.g. a back-end team, or a QA team, and part of the justification given by some project managers, and Scrum Masters, for their role, is to faciliate communication between these silos. Meanwhile, the broader business may instead perceive works as products that the customer would purchase. 

This misalignment can be addressed with ['feature squads](https://www.svpg.com/product-vs-feature-teams/), along with the associated concept of Toyota's value steam mapping (a la Six Sigma; and getting back to what Agile was really about, i.e. learning from early Toyota's efficient management system.) That is to design the dynamics of workflow through engineering staff to form product delivery streams, but with domain-driven architecture (hence, caution on misinterpretation of 'product-led', but rather hollistic, considering also, for example, 'tech debt' to ensure delivery; Scrum lacks, and few businesses would allow for, an [Andon cord](https://en.wikipedia.org/wiki/Andon_(manufacturing)).) This would provide far more efficiency than any 'Retro' meeting that has diverted from discussing 'kaizens' into a pseudo-therapy session that talks about feelings but does not address the 'root cause' of problems. 

---

## Other

(Pasted at end of this markdown file the default stuff in the default README.md for Angular app.)

**Code scaffolding**

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

**Angular documentation**

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.