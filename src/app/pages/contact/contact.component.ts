import { Component, OnInit } from "@angular/core";
import { AppValues } from "../../core/config/enums";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../shared/models/heading-block.model";
import { HeadingBlockComponent } from "../../shared/molecules/heading-block/heading-block.component";
import { SiteGraphService } from "../../core/services/site-graph/site-graph.service";

@Component({
	selector: "app-contact",
	standalone: true,
	imports: [HeadingBlockComponent],
	templateUrl: "./contact.component.html",
	styleUrl: "./contact.component.sass"
})
export class ContactComponent implements OnInit {
	appValues = AppValues;
	headingData$: Observable<HeadingBlock> = of({
		headingText: this.appValues.CONTACT_HEADING_TEXT,
		taglineText: this.appValues.CONTACT_TAGLINE,
		taglineSmallText: this.appValues.CONTACT_TAGLINE_SMALL,
		alignment: this.appValues.HEADERBLOCK_ALIGNMENT_NONE,
		mb: this.appValues.HEADERBLOCK_MB
	});
	blockName = "contact";
	contactData$: any;

	constructor(private siteGraphService: SiteGraphService) {}

	ngOnInit() {
 
		this.contactData$ = this.siteGraphService.fetchBlocks(this.blockName);

	}
}