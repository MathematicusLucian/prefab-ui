import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
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