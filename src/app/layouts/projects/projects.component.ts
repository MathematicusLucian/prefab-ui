import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { CardblockComponent } from '../../components/cardblock/containers/cardblock.component';
import { selectSiteGraph } from '../../shared/core-state'; //selectBlock

@Component({
  selector: 'app-projects',
  template: `
      <ng-container *ngIf="projectsData$">
        <cardblock [data$]="projectsData$"></cardblock>
      </ng-container>
  `,
  standalone: true,
  imports: [CardblockComponent, CommonModule],
})
export class ProjectsComponent implements OnInit {

  blockName = "projects";
  projectsData$: any;
  constructor(private store: Store) { 
  }

  ngOnInit() {

    this.store.select(selectSiteGraph).subscribe((x: any) => {
      const data = x.filter((y:any) => { if(y.name == this.blockName) return y.body });  
      this.projectsData$ = of(data[0]['body']);
    }); 

    // this.projectsData$ = this.blockName$.pipe(
    //   switchMap((name) => this.store.select(selectBlock({ name: name })))
    // );

    // this.projectsData$.subscribe((x: any) => {
    //   console.log('x-1b', x);
    // }); 

  }

}