import { Component } from '@angular/core';
import { BioComponent } from '../../components/bio/bio.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { BlogComponent } from '../blog/blog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, BioComponent, SkillsComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {}