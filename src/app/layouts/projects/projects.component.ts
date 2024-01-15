import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { Store } from '@ngrx/store';
import { CardblockComponent } from '../../components/cardblock/containers/cardblock.component';
import { selectSiteGraph } from '../../shared/core-state'; //selectBlock

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
  standalone: true,
  imports: [CommonModule, HeadingBlockComponent, CardblockComponent ],
})
export class ProjectsComponent implements OnInit {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.PROJECTS_HEADING_TEXT,
    taglineText: this.appValues.PROJECTS_TAGLINE,
    taglineSmallText: this.appValues.PROJECTS_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  blockName = "projects";
  projectsData$: any;

  constructor(private store: Store) {}

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