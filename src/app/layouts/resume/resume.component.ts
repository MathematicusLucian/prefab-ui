import { Component } from '@angular/core';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { BioComponent } from '../../components/bio/bio.component';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogComponent } from '../blog/blog.component';
import { TaglineComponent } from '../../components/tagline/tagline.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TextHeadingComponent, BioComponent, TaglineComponent, SkillsComponent, BlockExperienceComponent, BlogComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass'
})
export class ResumeComponent {

}