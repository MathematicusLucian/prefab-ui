import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { HeadingBlock } from "../../models/heading-block.model";
import { HeadingComponent } from "../../atoms/text-heading/text-heading.component";
import { TaglineComponent } from "../../atoms/tagline/tagline.component";
import { TaglineSmallComponent } from "../../atoms/tagline-small/tagline-small.component";

@Component({
	selector: "app-heading-block",
	standalone: true,
	imports: [HeadingComponent, TaglineComponent, TaglineSmallComponent],
	templateUrl: "./heading-block.component.html",
	styleUrl: "./heading-block.component.sass"
})
export class HeadingBlockComponent implements OnInit, OnDestroy {
  @Input() headingData$: any = "";
  headingText: string = "";
  header: string = "false";
  taglineText: string = "";
  taglineSmallText: string = "";
  alignment: string = "";
  fontWeight: string = "semibold";
  mb: number = 0;

  constructor() {}

  ngOnInit() {
  	this.headingData$.map((x:any) => {
  		x.subscribe((y:any) => {
  			this.headingText = y.headingText;
  			this.header = (y.header) ? y.header : "false";
  			this.taglineText = y.taglineText;
  			this.taglineSmallText = (y.taglineSmallText) ? y.taglineSmallText : "28";
  			this.alignment = y.alignment;
  			this.fontWeight = y.fontWeight;
  			this.mb = y.mb;
  		});
  	});
  }

  ngOnDestroy() {
	  // this.projectsData$.unsubscribe();
  }
  
}