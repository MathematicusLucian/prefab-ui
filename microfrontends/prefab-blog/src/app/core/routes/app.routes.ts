import { Route, ActivatedRouteSnapshot, CanActivate, CanLoad, UrlSegment } from "@angular/router";
import { Injectable } from "@angular/core";

import { ENV } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class IsAdminGuard implements CanActivate {
	canActivate(route: ActivatedRouteSnapshot) {
		window.location.href = route.data["externalUrl"];
		return false;
	}
}

@Injectable({ providedIn: "root" })
export class DevEnvGuard implements CanActivate {
	canActivate(route: ActivatedRouteSnapshot) {
		return !ENV.production; // if prod = false it will load module
	}
}

export const APP_ROUTES: Route[] = [
	// { 
	// 	path: "import",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-editor/add-content/add-content.component").then(m => m.AddContentComponent),
	// 	canActivate: [DevEnvGuard]
	// },
	// { 
	// 	path: "editor",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-editor/add-page/add-page.component").then(m => m.AddPageComponent),
	// 	canActivate: [DevEnvGuard]
	// },
	// { 
	// 	path: "editor/:id",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-editor/add-page/add-page.component").then(m => m.AddPageComponent),
	// 	canActivate: [DevEnvGuard]
	// },
	// { 
	// 	path: "contact",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-contact/contact/contact.component").then(m => m.ContactComponent),
	// },
	// { 
	//     path: "courses",
	//     loadComponent: () => 
	//         import('../../pages/courses/courses.component').then(m => m.CoursesComponent),
	// },
	// {   
	// 	path: "cv", 
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-resume/src/app/resume/resume.component").then(m => m.ResumeComponent)
	// },
	// { 
	// 	path: "github",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-resume/src/app/resume/resume.component").then(m => m.ResumeComponent),
	// 	canActivate: [IsAdminGuard],
	// 	data: {
	// 		externalUrl: "https://github.com/MathematicusLucian"
	// 	}
	// },
	// { 
	// 	path: "home", 
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-home/src/home/home.component").then(m => m.HomeComponent),
	// },
	// { 
	// 	path: "linkedin",
	// 	loadComponent: () => 
	// 		import("../../../../../prefab-resume/src/app/resume/resume.component").then(m => m.ResumeComponent),
	// 	canActivate: [IsAdminGuard],
	// 	data: {
	// 		externalUrl: "https://www.linkedin.com/in/lukejones123/"
	// 	}
	// },
	// { 
	// 	path: "news", 
	// 	loadComponent: () => 
	// 		import("../../blog/blog.component").then(m => m.BlogComponent)
	// },
	// { 
	// 	path: "post/:id", 
	// 	loadComponent: () => 
	// 		import("../../blog-post/blog-post.component").then(m => m.BlogPostComponent),
	// },
	// { 
	// 	path: "projects",
	// 	loadComponent: () => 
	// 		import("../../../../../root-html-file/projects/projects.component").then(m => m.ProjectsComponent),
	// },
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
		loadComponent: () => 
			import('../../empty-route/empty-route.component').then(m => m.EmptyRouteComponent),
	},
	{ 
		path: "**", 
		loadComponent: () => 
			import('../../empty-route/empty-route.component').then(m => m.EmptyRouteComponent),
	},
];