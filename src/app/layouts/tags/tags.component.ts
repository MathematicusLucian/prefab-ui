import { Component } from '@angular/core';
import { BlogPostComponent } from '../../components/blog-post/blog-post.component';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { TaglineComponent } from '../../components/tagline/tagline.component';
import { TaglineSmallComponent } from '../../components/tagline-small/tagline-small.component';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [BlogPostComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.sass'
})
export class TagsComponent {

}