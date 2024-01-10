import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '../badge/badge.component';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { TaglineSmallComponent } from '../tagline-small/tagline-small.component';
import { TaglineComponent } from '../tagline/tagline.component';
import skillsData from '../../../assets/skills.json';

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
  imports: [CommonModule, BadgeComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {
  skillsData: any = skillsData; //SkillsData
  tagData: any =  [
    "ALL",
    "Java",
    "Python",
    "C#",
    "C++",
    "JavaScript/UI",
    "QA",
    "CI/CD",
    "Infra / DBs",
    "AI",
    "SDLC/Agile",
    "Leadership"
  ];
  tagChosen = "ALL";

  constructor() {}

  setChosenTag(tagClicked: string) {
    this.tagChosen = tagClicked;
  }

  hasChosenTag(skill: any): boolean {
    return this.tagChosen == skill.tag || this.tagChosen == "ALL";
  }
}