import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValues } from '../../core/config/enums';
import { Observable, of, switchMap } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { Store } from '@ngrx/store';
import { CardblockComponent } from '../../components/cardblock/containers/cardblock.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { flatMap, mergeMap } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
  standalone: true,
  imports: [CommonModule, HeadingBlockComponent, CardblockComponent ],
})
export class ProjectsComponent implements OnInit, OnChanges {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.PROJECTS_HEADING_TEXT,
    taglineText: this.appValues.PROJECTS_TAGLINE,
    taglineSmallText: this.appValues.PROJECTS_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  blockName = "projects";
  blockName$ = of("projects");
  projectsData$!: any;

  constructor(private store: Store, private siteGraphService: SiteGraphService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
 
    this.projectsData$ = this.siteGraphService.fetchBlocks(this.blockName);

  }

  ngOnChanges() {

    // this.projectsData$ = this.blockName$.pipe(
    //   switchMap((name) => this.store.select(selectBlock({ name: name })))
    // );
  
  }

}