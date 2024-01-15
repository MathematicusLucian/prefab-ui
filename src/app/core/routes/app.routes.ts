import { Route, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
// import { RedirectGuard } from './redirect.guard';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IsAdminGuard implements CanActivate {
  
  canActivate(route: ActivatedRouteSnapshot) {
      window.location.href = route.data['externalUrl'];
      return false;
  }
}

export const APP_ROUTES: Route[] = [
    { 
        path: 'blog', 
        loadComponent: () => 
            import('../../layouts/blog/blog.component').then(m => m.BlogComponent)
    },
    { 
        path: "contact",
        loadComponent: () => 
            import('../../layouts/contact/contact.component').then(m => m.ContactComponent),
    },
    { 
        path: "courses",
        loadComponent: () => 
            import('../../layouts/courses/courses.component').then(m => m.CoursesComponent),
    },
    {   
        path: 'cv', 
        loadComponent: () => 
            import('../../layouts/resume/resume.component').then(m => m.ResumeComponent)
    },
    { 
        path: "github",
        loadComponent: () => 
            import('../../layouts/resume/resume.component').then(m => m.ResumeComponent),
        canActivate: [IsAdminGuard],
        data: {
            externalUrl: "https://https://k1n4kut4.github.io/"
        }
    },
    { 
        path: 'home', 
        loadComponent: () => 
            import('../../layouts/home/home.component').then(m => m.HomeComponent),
    },
    { 
        path: "linkedin",
        loadComponent: () => 
            import('../../layouts/resume/resume.component').then(m => m.ResumeComponent),
        canActivate: [IsAdminGuard],
        data: {
            externalUrl: "https://www.linkedin.com/in/lukejones123/"
        }
    },
    { 
        path: "projects",
        loadComponent: () => 
            import('../../layouts/projects/projects.component').then(m => m.ProjectsComponent),
    },
    { 
        path: "tags",
        loadComponent: () => 
            import('../../layouts/tags/tags.component').then(m => m.TagsComponent),
    },
    { 
        path: "research",
        loadComponent: () => 
            import('../../layouts/research/research.component').then(m => m.ResearchComponent),
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    },
];