import { Component } from '@angular/core';
import { AppValues } from '../../core/config/enums';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { HeadingBlockComponent } from '../../components/heading-block/heading-block.component';
import { BlogPostComponent } from '../../components/blog-post/blog-post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeadingBlockComponent, BlogPostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.sass'
})
export class BlogComponent {
  appValues = AppValues;
  headingData$: Observable<HeadingBlock> = of({
    headingText: this.appValues.BLOG_HEADING_TEXT,
    taglineText: this.appValues.BLOG_TAGLINE,
    taglineSmallText: this.appValues.BLOG_TAGLINE_SMALL,
    alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
    mb: this.appValues.HEADERBLOCK_MB
  });
}