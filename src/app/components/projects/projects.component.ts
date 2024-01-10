import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ChangeDetectorRef, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatPaginator} from '@angular/material/paginator';
import projectData from './../../../assets/projects.json';
import { CardComponent } from '../card/card.component';
import { of } from 'rxjs';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  projectData$: Card[] = [];
  constructor() {}

  ngOnInit() {
    of(projectData).subscribe(x => {
      this.projectData$ = x;
    }); 
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}