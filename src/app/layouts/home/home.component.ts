import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
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
import MagicGrid from 'magic-grid';
import projectData from './../../../assets/projects.json';
import { Observable } from 'rxjs';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TextHeadingComponent, BioComponent, SkillComponent, BlockExperienceComponent, BlogComponent, MatCardModule, MatPaginatorModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  projectData$!: Observable<any>;
  projectData = projectData;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(projectData);
  magicGrid: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.projectData$ = this.dataSource.connect();

    this.magicGrid = new MagicGrid({
      container: "#magic-grid", 
      items: this.projectData.length,
      gutter: 3,
      maxColumns: 4,
      useMin: true,
      useTransform: true,
      animate: true, 
    });
    this.magicGrid.listen();
    // this.magicGrid.positionItems();
  }

  ngAfterViewInit() {
    // this.magicGrid.positionItems();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}