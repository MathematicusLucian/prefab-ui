import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of, switchMap } from 'rxjs';
import { HeadingBlockComponent } from '../../shared/components/heading-block/heading-block.component';
import { CardblockComponent } from '../../shared/components/cardblock/containers/cardblock.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';
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
    this.projectsData$ = this.siteGraphService.fetchBlocks(this.blockName);
    this.siteGraphService.fetchAllBlocks().subscribe();
  }

}