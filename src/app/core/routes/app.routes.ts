import { Route, ActivatedRouteSnapshot, CanActivate, CanLoad, UrlSegment } from "@angular/router";
// import { RedirectGuard } from './redirect.guard';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ENV } from "./../../../environments/environment";

@Injectable({ providedIn: "root" })
export class IsAdminGuard implements CanActivate {
	canActivate(route: ActivatedRouteSnapshot) {
		window.location.href = route.data["externalUrl"];
		return false;
	}
}

@Injectable({ providedIn: "root" })
export class DevEnvGuard implements CanActivate {
	// constructor() {}CanActivate {
	canActivate(route: ActivatedRouteSnapshot) {
		return !ENV.production; // if prod = false it will load module
	}
}

export const APP_ROUTES: Route[] = [
	{ 
		path: "import",
		loadComponent: () => 
			import("../../pages/add-content/add-content.component").then(m => m.AddContentComponent),
		canActivate: [DevEnvGuard]
	},
	{ 
		path: "editor",
		loadComponent: () => 
			import("../../pages/add-page/add-page.component").then(m => m.AddPageComponent),
		canActivate: [DevEnvGuard]
	},
	{ 
		path: "editor/:id",
		loadComponent: () => 
			import("../../pages/add-page/add-page.component").then(m => m.AddPageComponent),
		canActivate: [DevEnvGuard]
	},
	{ 
		path: "contact",
		loadComponent: () => 
			import("../../pages/contact/contact.component").then(m => m.ContactComponent),
	},
	// { 
	//     path: "courses",
	//     loadComponent: () => 
	//         import('../../pages/courses/courses.component').then(m => m.CoursesComponent),
	// },
	{   
		path: "cv", 
		loadComponent: () => 
			import("../../pages/resume/resume.component").then(m => m.ResumeComponent)
	},
	{ 
		path: "github",
		loadComponent: () => 
			import("../../pages/resume/resume.component").then(m => m.ResumeComponent),
		canActivate: [IsAdminGuard],
		data: {
			externalUrl: "https://github.com/MathematicusLucian"
		}
	},
	{ 
		path: "home", 
		loadComponent: () => 
			import("../../pages/home/home.component").then(m => m.HomeComponent),
	},
	{ 
		path: "linkedin",
		loadComponent: () => 
			import("../../pages/resume/resume.component").then(m => m.ResumeComponent),
		canActivate: [IsAdminGuard],
		data: {
			externalUrl: "https://www.linkedin.com/in/lukejones123/"
		}
	},
	{ 
		path: "news", 
		loadComponent: () => 
			import("../../pages/blog/blog.component").then(m => m.BlogComponent)
	},
	{ 
		path: "post/:id", 
		loadComponent: () => 
			import("../../pages/blog-post/blog-post.component").then(m => m.BlogPostComponent),
	},
	{ 
		path: "projects",
		loadComponent: () => 
			import("../../pages/projects/projects.component").then(m => m.ProjectsComponent),
	},
	// { 
	//     path: "tags",
	//     loadComponent: () => 
	//         import('../../pages/tags/tags.component').then(m => m.TagsComponent),
	// },
	// { 
	//     path: "research",
	//     loadComponent: () => 
	//         import('../../pages/research/research.component').then(m => m.ResearchComponent),
	// },
	{ 
		path: "", 
		redirectTo: "/home", 
		pathMatch: "full"
	},
	{ 
		path: "**", 
		redirectTo: "/home" 
	},
];