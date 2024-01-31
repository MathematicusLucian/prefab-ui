import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { BadgeComponent } from '../badge/badge.component';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { TaglineSmallComponent } from '../tagline-small/tagline-small.component';
import { TaglineComponent } from '../tagline/tagline.component';
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
  imports: [CommonModule, HeadingBlockComponent, BadgeComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent implements OnInit, OnDestroy {
  @Input() skillsData: any = [];
  @Input() tagData: any = [];
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.SKILLS_HEADING_TEXT,
    taglineText: this.appValues.SKILLS_TAGLINE,
    taglineSmallText: this.appValues.SKILLS_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
  private sub: any; 
  siteGraph: any;
  tagChosen = "ALL";

  constructor(private route: ActivatedRoute) {
    this.siteGraph = {};
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  setChosenTag(tagClicked: string) {
    this.tagChosen = tagClicked;
  }

  hasChosenTag(skill: any): boolean {
    return false;
    // return skill.tag.includes(this.tagChosen) || this.tagChosen == "ALL";
  }
}