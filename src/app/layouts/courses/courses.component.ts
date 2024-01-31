import { Component, OnInit } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [HeadingBlockComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass'
})
export class CoursesComponent implements OnInit {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.COURSES_HEADING_TEXT,
    taglineText: this.appValues.COURSES_TAGLINE,
    taglineSmallText: this.appValues.COURSES_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  blockName = "courses";
  coursesData$: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
 
    this.coursesData$ = this.siteGraphService.fetchBlocks(this.blockName);

  }
}