import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import skillsData from '../../../assets/skills.json';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
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