import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-paragraph",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./paragraph.component.html",
	styleUrl: "./paragraph.component.sass"
})
export class ParagraphComponent {
  @Input() title = "";
  @Input() body = "";

}
