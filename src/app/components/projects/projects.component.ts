import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginator} from '@angular/material/paginator';
import projectData from './../../../assets/projects.json';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  projectData$!: any; 
  projectData = projectData;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(projectData);

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