import { Component, Input, OnInit } from "@angular/core";
import { BadgeComponent } from "../../atoms/badge/badge.component";


@Component({
	selector: "app-badge-block",
	standalone: true,
	imports: [BadgeComponent],
	templateUrl: "./badge-block.component.html",
	styleUrl: "./badge-block.component.sass"
})
export class BadgeBlockComponent implements OnInit {
  @Input() badges!: any;

  ngOnInit() { }
}
