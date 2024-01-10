import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import skillsData from './../../../assets/skills.json';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.sass'
})
export class SkillComponent implements OnInit {
  skillsData: any = skillsData;

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}