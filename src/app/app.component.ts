// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './shared/services/api/api.service';
import { RouterLink, RouterOutlet, RouterLinkActive, RouterEvent, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common'
import { BackButtonDirective } from "./core/services/navigation/back-button.directive";
import { NavigationService } from './core/services/navigation/navigation.service';
import { SiteGraphService } from './core/services/site-graph/site-graph.service';
import { appLoaded } from "./shared/core-state";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getAnalytics } from "firebase/analytics";
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { Router } from "@angular/router";

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule,
    FlexLayoutModule, FlexLayoutServerModule, HeaderComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'personal-porfolio';
  dataPipelineUrl: any;
  dataPaths: any;
  error: any;
  headerData$: any;
  footerData$: any;
  mainMenuData$: any;
  linksMenuData$: any;
  skillsData$: any;
  isLoading!: boolean;
  faSpinner = faSpinner;

  constructor(private apiService: APIService, 
    private location: Location,
    // private backButtonDirective: BackButtonDirective,
    private navigationService: NavigationService,
    private siteGraphService: SiteGraphService, 
    private store: Store,
    private router: Router
  ) {
    this.isLoading = false;
    
    router.events.subscribe(
      ( event: NavigationEvent ): void => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else if (event instanceof NavigationEnd) {
          this.isLoading = false;
        }
      }
    );

		router.events
    .pipe(
      filter(
        ( event: NavigationEvent ) => {
          return( event instanceof NavigationStart );
        }
      )
    )
    .subscribe(
      (event: any) => {
        // console.group( "NavigationStart Event" );
        // console.log( "navigation id:", event.id );
        // console.log( "route:", event.url );
        // console.log( "trigger:", event.navigationTrigger );
        // console.log( "event.restoredState", event.restoredState );
        // if ( event.restoredState ) {
        //   console.log( "restoring navigation id:", event.restoredState.navigationId );
        // }
    });
  }

  ngOnInit() {
    this.navigationService.commenceHistoryStorage();
    this.siteGraphService.loadSiteGraph();
    this.store.dispatch(appLoaded());
    // this.headerData$ = this.siteGraphService.fetchBlocks('header');
    this.footerData$ = this.siteGraphService.fetchBlocks('footer');
    this.mainMenuData$ = this.siteGraphService.fetchBlocks('menu_main');
    this.linksMenuData$ = this.siteGraphService.fetchBlocks('menu_links');
  }
}