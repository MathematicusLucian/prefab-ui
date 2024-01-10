import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { ResumeComponent } from './layouts/resume/resume.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'cv', component: ResumeComponent }
];
