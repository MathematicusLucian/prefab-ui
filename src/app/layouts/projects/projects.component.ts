import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { TaglineComponent } from '../../components/tagline/tagline.component';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { TaglineSmallComponent } from '../../components/tagline-small/tagline-small.component';
import { CardblockComponent } from '../../components/cardblock/containers/cardblock.component';
import { selectSiteGraph } from '../../shared/core-state'; //selectBlock

@Component({
  selector: 'app-projects',
  template: `<section class="relative block px-3 py-6 md:px-0 md:py-20 mx-1 my-1 md:mx-10 md:my-8 rounded-lg border-b border-pink-950 bg-slate-950 shadow">
    
  <div class="relative mx-auto max-w-5xl text-center">
      <app-tagline-small taglineText="Experience"></app-tagline-small>
      <app-text-heading headingText="GitHub scribbles" alignment="center" mb="4"></app-text-heading>
      <app-tagline taglineText="Snippets, dabbles, and all that !"></app-tagline>
  </div>

  <ng-container *ngIf="projectsData$">
    <cardblock [data$]="projectsData$"></cardblock>
  </ng-container>

</section>
  `,
  standalone: true,
  imports: [CommonModule, TaglineComponent, TextHeadingComponent, TaglineSmallComponent, CardblockComponent ],
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