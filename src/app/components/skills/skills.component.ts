import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import skillsData from '../../../assets/skills.json';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent implements OnInit {
  skillsData: any = skillsData;

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}