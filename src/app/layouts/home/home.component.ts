import { Component } from '@angular/core';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { BioComponent } from '../../components/bio/bio.component';
import { SkillComponent } from '../../components/skill/skill.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogComponent } from '../blog/blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TextHeadingComponent, BioComponent, SkillComponent, BlockExperienceComponent, BlogComponent, MatCardModule, FlexLayoutModule, FlexLayoutServerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  gridColumns = 3;
}