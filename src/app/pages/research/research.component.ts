import { Component, OnInit } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../shared/molecules/heading-block/heading-block.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [HeadingBlockComponent, BlogPostComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.sass'
})
export class ResearchComponent implements OnInit {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.RESEARCH_HEADING_TEXT,
    taglineText: this.appValues.RESEARCH_TAGLINE,
    taglineSmallText: this.appValues.RESEARCH_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  blockName = "research";
  researchData$: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
 
    this.researchData$ = this.siteGraphService.fetchBlocks(this.blockName);

  }
}