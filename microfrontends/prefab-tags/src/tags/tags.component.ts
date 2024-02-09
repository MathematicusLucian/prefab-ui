import { Component, OnInit } from "@angular/core";
import { AppValues } from "../../prefab-blog/src/app/core/config/enums";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../../prefab-components/models/heading-block.model";
import { HeadingBlockComponent } from "../../../prefab-components/molecules/heading-block/heading-block.component";
import { SiteGraphService } from "../../prefab-blog/src/app/core/services/site-graph/site-graph.service";

@Component({
	selector: "app-tags",
	standalone: true,
	imports: [HeadingBlockComponent],
	templateUrl: "./tags.component.html",
	styleUrl: "./tags.component.sass"
})
export class TagsComponent implements OnInit {
	appValues = AppValues;
	headingData$: Observable<HeadingBlock> = of({
		headingText: this.appValues.TAGS_HEADING_TEXT,
		taglineText: this.appValues.TAGS_TAGLINE,
		taglineSmallText: this.appValues.TAGS_TAGLINE_SMALL,
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	blockName = "skills_tags";
	tagsData$: any;

	constructor(private siteGraphService: SiteGraphService) {}

	ngOnInit() {
 
		this.tagsData$ = this.siteGraphService.fetchBlocks(this.blockName);

	}
}