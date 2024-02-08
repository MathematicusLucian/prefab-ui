import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
	selector: "app-badge",
	standalone: true,
	imports: [],
	templateUrl: "./badge.component.html",
	styleUrl: "./badge.component.sass"
})
export class BadgeComponent implements OnInit, OnChanges {
  @Input() badgeText: string = "";
  @Input() bgColor: string | null = "amber";
  @Input() textColor: string = "white";
  
  ngOnInit() { }

  ngOnChanges(change:any) { }
}
