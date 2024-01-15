import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { app } from '../../server';
import { ENV } from '../environments/environment';
import { APIService } from './core/services/api/api.service';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Store } from '@ngrx/store';
import { SiteGraphService } from './core/services/site-graph/site-graph.service';
import { appLoaded } from "./shared/core-state";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FlexLayoutModule, FlexLayoutServerModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'personal-porfolio';
  dataPipelineUrl: any;
  dataPaths: any;
  error: any;

  constructor(private apiService: APIService, private siteGraphService: SiteGraphService, private store: Store) {}
  
  ngOnInit(): void {
    this.siteGraphService.loadSiteGraph();
    this.store.dispatch(appLoaded());
  }

  ngAfterViewInit() {}
}