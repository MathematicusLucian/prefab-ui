import { Component } from '@angular/core';
import { BlogPostComponent } from '../../components/blog-post/blog-post.component';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { TaglineComponent } from '../../components/tagline/tagline.component';
import { TaglineSmallComponent } from '../../components/tagline-small/tagline-small.component';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [BlogPostComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.sass'
})
export class ResearchComponent {

}
