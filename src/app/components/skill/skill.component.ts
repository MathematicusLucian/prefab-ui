import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import skillsData from './../../../assets/skills.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.sass'
})
export class SkillComponent implements OnInit {
  skillsData = skillsData;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
  }
}