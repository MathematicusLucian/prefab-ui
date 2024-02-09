import { Component, Input, OnChanges } from "@angular/core";

@Component({
	selector: "app-tagline",
	standalone: true,
	imports: [],
	templateUrl: "./tagline.component.html",
	styleUrl: "./tagline.component.sass"
})
export class TaglineComponent implements OnChanges {
  @Input() taglineText: any;
  taglineText$: any;

  ngOnChanges(changes:any) {
  	this.taglineText$ = changes.taglineText.currentvalue;
  }
}
