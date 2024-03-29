import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { decode } from "html-entities";
import { CommonModule } from "@angular/common";
import { FirebaseService } from "../../shared/services/firebase/firebase.service";
import { BadgeBlockComponent } from "../../shared/molecules/badge-block/badge-block.component";
import { of } from "rxjs";

@Component({
	selector: "app-blog-post",
	standalone: true,
	imports: [CommonModule, BadgeBlockComponent],
	templateUrl: "./blog-post.component.html",
	styleUrl: "./blog-post.component.sass"
})
export class BlogPostComponent implements OnInit, OnDestroy {
	postData$!: any;
	postDetails!: any;
	id!: any;
	badges = of({ 
		bgColor: "pink",
		textColor: "white",
		tags: ["Lorem", "Ipsum", "Blah Blah"]
	});

	constructor(private route: ActivatedRoute, private firebase: FirebaseService) {}

	ngOnInit() {
		this.id = this.route.snapshot.params["id"];
		// this.id$ = this.route.paramMap.pipe(
		// 	switchMap((params) => this.websiteStore.select(params.get('id')))
		//   );
		this.postData$ = this.firebase.getItemById("blog_posts", this.id);
		this.postData$.then((post: any) => this.postDetails = post);
	}

	decode = (x: any) => decode(x);

	ngOnDestroy() { }
}