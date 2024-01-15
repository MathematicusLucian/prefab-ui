import { Component } from '@angular/core';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { TaglineComponent } from '../tagline/tagline.component';
import { TaglineSmallComponent } from '../tagline-small/tagline-small.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogPostComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.sass'
})
export class BlogComponent {
}