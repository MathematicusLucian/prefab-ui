import { Component } from '@angular/core';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { BioComponent } from '../../components/bio/bio.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogComponent } from '../blog/blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectsComponent, CardComponent, TextHeadingComponent, BioComponent, SkillsComponent, BlockExperienceComponent, BlogComponent, MatCardModule, MatPaginatorModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {}