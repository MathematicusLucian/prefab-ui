import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    { path: 'home', loadComponent: () => 
        import('./layouts/home/home.component').then(m => m.HomeComponent)},
    { path: 'blog', loadComponent: () => 
        import('./layouts/blog/blog.component').then(m => m.BlogComponent)},
    { path: 'cv', loadComponent: () => 
      import('./layouts/resume/resume.component').then(m => m.ResumeComponent)},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];