import { Component, OnInit } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { BioComponent } from '../../components/bio/bio.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { SiteGraphService } from '../../core/services/site-graph/site-graph.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeadingBlockComponent, BioComponent, SkillsComponent, BlockExperienceComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass'
})
export class ResumeComponent implements OnInit{
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.CV_HEADING_TEXT,
    taglineText: this.appValues.CV_TAGLINE,
    taglineSmallText: this.appValues.CV_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  blockName = "resume";
  resumeData$: any;
  skillsData$: any;
  tagData$: any;

  constructor(private siteGraphService: SiteGraphService) {}

  ngOnInit() {
 
    this.resumeData$ = this.siteGraphService.fetchBlocks(this.blockName);
    this.skillsData$ = this.siteGraphService.fetchBlocks('skills');
    this.tagData$ = this.siteGraphService.fetchBlocks('skills_tags');

  }
}