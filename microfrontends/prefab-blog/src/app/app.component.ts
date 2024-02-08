import { Component, OnInit } from "@angular/core";
// import { APIService } from "../../../../prefab-components/services/api/api.service";
// import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router"; //, NavigationEnd
// import { HeaderComponent } from "../../../../prefab-components/templates/header/header.component";
// import { FooterComponent } from "../../../../prefab-components/templates/footer/footer.component";
// import { FlexLayoutModule } from "@angular/flex-layout";
// import { FlexLayoutServerModule } from "@angular/flex-layout/server";
// import { Store } from "@ngrx/store";
// import { Location } from "@angular/common";
// import { NavigationService } from "./core/services/navigation/navigation.service";
// import { SiteGraphService } from "./core/services/site-graph/site-graph.service";
// import { appLoaded } from "../../../../prefab-components/core-state";
// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { getAnalytics } from "firebase/analytics";
// import { Event as NavigationEvent } from "@angular/router";
// import { filter } from "rxjs/operators";
// import { NavigationStart } from "@angular/router";
// import { Router } from "@angular/router";
// import { BrowserModule } from '@angular/platform-browser';

// interface Item {
//   name: string,
// }

@Component({
	// selector: "app-root",
	selector: 'prefab-blog',
	standalone: true,
	imports: [], //RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule, FlexLayoutModule, FlexLayoutServerModule, HeaderComponent, FooterComponent
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.sass"
})
export class AppComponent implements OnInit {
	title = 'prefab-blog';
	// title = "app-root";
	// dataPipelineUrl: any;
	// dataPaths: any;
	// error: any;
	// headerData$: any;
	// footerData$: any;
	// mainMenuData$: any;
	// linksMenuData$: any;
	// skillsData$: any;
	// isLoading!: boolean;
	// faSpinner = faSpinner;

	constructor(
		// private apiService: APIService, 
    	// private location: Location,
		// private navigationService: NavigationService,
		// private siteGraphService: SiteGraphService, 
		// private store: Store,
		// private router: Router
	) {
		// this.isLoading = false;
    
		// router.events.subscribe(
		// 	( event: NavigationEvent ): void => {
		// 		if (event instanceof NavigationStart) {
		// 			this.isLoading = true;
		// 		} else if (event instanceof NavigationEnd) {
		// 			this.isLoading = false;
		// 		}
		// 	}
		// );

		// router.events
		// 	.pipe(
		// 		filter(
		// 			( event: NavigationEvent ) => {
		// 				return( event instanceof NavigationStart );
		// 			}
		// 		)
		// 	)
		// 	.subscribe(
		// 		(event: any) => {
		// 			// console.group( "NavigationStart Event" );
		// 			// console.log( "navigation id:", event.id );
		// 			// console.log( "route:", event.url );
		// 			// console.log( "trigger:", event.navigationTrigger );
		// 			// console.log( "event.restoredState", event.restoredState );
		// 			// if ( event.restoredState ) {
		// 			//   console.log( "restoring navigation id:", event.restoredState.navigationId );
		// 			// }
		// 		});
	}

	ngOnInit() {
		// this.navigationService.commenceHistoryStorage();
		// this.siteGraphService.loadSiteGraph();
		// this.store.dispatch(appLoaded());

			// this.headerData$ = this.siteGraphService.fetchBlocks('header');

		// this.footerData$ = this.siteGraphService.fetchBlocks("footer");
		// this.mainMenuData$ = this.siteGraphService.fetchBlocks("menu_main");
		// this.linksMenuData$ = this.siteGraphService.fetchBlocks("menu_links");
	}
}