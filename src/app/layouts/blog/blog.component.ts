import { Component } from '@angular/core';
import { BlockExperienceComponent } from '../../components/block-experience/block-experience.component';
import { BlogPostComponent } from '../../components/blog-post/blog-post.component';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogPostComponent, TextHeadingComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.sass'
})
export class BlogComponent {

}
