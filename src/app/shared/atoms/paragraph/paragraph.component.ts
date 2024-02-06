import { Component, Input } from "@angular/core";


@Component({
	selector: "app-paragraph",
	standalone: true,
	imports: [],
	templateUrl: "./paragraph.component.html",
	styleUrl: "./paragraph.component.sass"
})
export class ParagraphComponent {
  @Input() title = "";
  @Input() body = "";

}
