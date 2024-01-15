import { Component } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { BioComponent } from '../../components/bio/bio.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeadingBlockComponent, BioComponent, SkillsComponent, BlockExperienceComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass'
})
export class ResumeComponent {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.CV_HEADING_TEXT,
    taglineText: this.appValues.CV_TAGLINE,
    taglineSmallText: this.appValues.CV_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
}