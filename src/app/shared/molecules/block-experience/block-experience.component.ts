
import { Component, OnInit, Input } from "@angular/core";
import { TaglineComponent } from "../../atoms/tagline/tagline.component";
import { TaglineSmallComponent } from "../../atoms/tagline-small/tagline-small.component";

@Component({
	selector: "app-block-experience",
	standalone: true,
	imports: [TaglineComponent, TaglineSmallComponent],
	templateUrl: "./block-experience.component.html",
	styleUrl: "./block-experience.component.sass"
})
export class BlockExperienceComponent implements OnInit {
  @Input() experienceItemDetails: any;

  ngOnInit() {}
}
