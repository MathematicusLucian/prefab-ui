import { Component, OnInit } from "@angular/core";
import { AppValues } from "../core/config/enums";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../../../../prefab-components/models/heading-block.model";
import { HeadingBlockComponent } from "../../../../../prefab-components/molecules/heading-block/heading-block.component";
import { BlogPostComponent } from "../blog-post/blog-post.component";
import { SiteGraphService } from "../core/services/site-graph/site-graph.service";
import { CardblockComponent } from "../../../../../prefab-components/templates/cardblock/cardblock.component";


@Component({
	selector: "app-blog",
	standalone: true,
	imports: [HeadingBlockComponent, BlogPostComponent, CardblockComponent],
	templateUrl: "./blog.component.html",
	styleUrl: "./blog.component.sass"
})
export class BlogComponent implements OnInit {
	appValues = AppValues;
	headingData$: Observable<HeadingBlock> = of({
		headingText: this.appValues.BLOG_HEADING_TEXT,
		taglineText: this.appValues.BLOG_TAGLINE,
		taglineSmallText: this.appValues.BLOG_TAGLINE_SMALL,
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	blockName = "news";
	blogData$: any;

	constructor(private siteGraphService: SiteGraphService) {}

	ngOnInit() {
		this.blogData$ = this.siteGraphService.fetchBlocks(this.blockName);
	}
}