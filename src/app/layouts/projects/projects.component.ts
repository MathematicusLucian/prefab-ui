import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, switchMap } from 'rxjs';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { Store } from '@ngrx/store';
import { CardblockComponent } from '../../components/cardblock/containers/cardblock.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
import { flatMap, mergeMap } from 'rxjs';
import { serverTimestamp } from 'firebase/firestore';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { AppValues } from '../../core/config/enums';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass',
  standalone: true,
  imports: [CommonModule, HeadingBlockComponent, CardblockComponent],
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
  projectsData$!: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
    console.log('testing: blockName', this.blockName);
 
    this.projectsData$ = this.siteGraphService.fetchBlocks(this.blockName);
    this.projectsData$.subscribe((x:any) => {
      console.log('testing', x);
    })

  }

}