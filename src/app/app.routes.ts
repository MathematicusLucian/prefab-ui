import { Route, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { ResumeComponent } from './layouts/resume/resume.component';

export const APP_ROUTES: Route[] = [
    { path: 'home', component: HomeComponent },
    // { path: 'blog', component: BlogComponent },
    { path: 'blog', loadComponent: () => 
        import('./layouts/blog/blog.component').then(m => m.BlogComponent)},
    { path: 'cv', component: ResumeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];