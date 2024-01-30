// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIService } from './core/services/api/api.service';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Store } from '@ngrx/store';
import { SiteGraphService } from './core/services/site-graph/site-graph.service';
import { appLoaded } from "./shared/core-state";
import { getAnalytics } from "firebase/analytics";

interface Item {
  name: string,
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, 
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
  mainMenuData$: any;
  linksMenuData$: any;
  skillsData$: any;
  footerData$: any;

  constructor(private apiService: APIService, 
    private siteGraphService: SiteGraphService, 
    private store: Store
  ) {}

  ngOnInit() {
    this.siteGraphService.loadSiteGraph();
    this.store.dispatch(appLoaded());
    this.headerData$ = this.siteGraphService.fetchBlocks('header');
    this.mainMenuData$ = this.siteGraphService.fetchBlocks('menu_main');
    this.linksMenuData$ = this.siteGraphService.fetchBlocks('menu_links');
    this.footerData$ = this.siteGraphService.fetchBlocks('footer');
  }
}