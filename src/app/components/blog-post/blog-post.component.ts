import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { decode } from 'html-entities';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.sass'
})
export class BlogPostComponent implements OnInit, OnDestroy {
  // @Input() postDetails: any;
  postData$!: any;
  postDetails!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.postData$ = this.route.paramMap
      .pipe(map(() => window.history.state))
      .subscribe((x:any) => {
        this.postDetails = x.blog_data;
      });
  }

  ngOnDestroy() {
    this.postData$.unsubscribe();
  }

  decode = (x: any) => decode(x);
}