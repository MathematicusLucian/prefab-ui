import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValues } from '../../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../models/heading-block.model';
import { HeadingBlockComponent } from '../../molecules/heading-block/heading-block.component';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { HeadingComponent } from '../../atoms/text-heading/text-heading.component';
import { TaglineSmallComponent } from '../../atoms/tagline-small/tagline-small.component';
import { TaglineComponent } from '../../atoms/tagline/tagline.component';
import { ActivatedRoute } from '@angular/router';

interface SkillsData {
  name: string,
  tag: string
}
interface TagData {
  name: string
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HeadingBlockComponent, BadgeComponent, HeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @Input() skillsData$: any;
  @Input() skillsCategoriesData$: any;
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.SKILLS_HEADING_TEXT,
    taglineText: this.appValues.SKILLS_TAGLINE,
    taglineSmallText: this.appValues.SKILLS_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  skillsCategoryChosenID = "ALL";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void { }
  ngOnChanges(): void { }
  ngOnDestroy(): void { }

  setChosenSkillsCategory = (skillsCategoryClickedID: string) =>
    this.skillsCategoryChosenID = skillsCategoryClickedID;

  hasChosenSkillsCategory = (chosenSkillsParent: any): boolean =>
    chosenSkillsParent.includes(this.skillsCategoryChosenID) || this.skillsCategoryChosenID == "ALL";
}