import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
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
export class SkillsComponent implements OnInit, OnChanges, OnDestroy {
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
  skills$: any[] = [];
  skillsCategories$: any[] = []; 
  skillsCategoryChosenID = "ALL";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.skillsData$.subscribe((x: any) => {
      this.skills$ = x;
    }); 
    this.skillsCategoriesData$.subscribe((x: any) => {
      this.skillsCategories$ = x;
    }); 
  }
  
  ngOnChanges(): void {
    // this.skillsData$.subscribe((x: any) => this.skills$.push(x));
    // console.log(this.skills);
    // this.skillsCategoriesData$.subscribe((x: any) => this.skillsCategories$.push(x));
  }

  ngOnDestroy(): void {
    // this.skillsData$.unsubscribe();
    // this.skillsCategoriesData$.unsubscribe();
  }

  setChosenSkillsCategory(skillsCategoryClickedID: string) {
    this.skillsCategoryChosenID = skillsCategoryClickedID;
  }

  hasChosenSkillsCategory(chosenSkillsParent: any): boolean {
    return chosenSkillsParent.includes(this.skillsCategoryChosenID) || this.skillsCategoryChosenID == "ALL";
  }
}