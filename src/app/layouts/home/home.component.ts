import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { BioComponent } from '../../components/bio/bio.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogComponent } from '../blog/blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
// import MagicGrid from 'magic-grid';
import projectData from './../../../assets/projects.json';
import { Observable } from 'rxjs';
import { NgxMasonryModule } from 'ngx-masonry';
// import { MasonryModule } from 'angular2-masonry';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxMasonryModule, CommonModule, TextHeadingComponent, BioComponent, SkillComponent, BlockExperienceComponent, BlogComponent, MatCardModule, MatPaginatorModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  projectData$!: any; //Observable<any>;
  projectData = projectData;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(projectData);

  masonryItems = [
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
  ];
  
  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.projectData$ = this.dataSource.connect();
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}