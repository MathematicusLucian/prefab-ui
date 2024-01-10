import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.sass'
})
export class BlogPostComponent {
  @Input() postDetails: any;
}