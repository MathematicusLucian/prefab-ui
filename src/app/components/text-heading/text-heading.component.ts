import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-heading',
  standalone: true,
  imports: [],
  templateUrl: './text-heading.component.html',
  styleUrl: './text-heading.component.sass'
})
export class TextHeadingComponent {
  @Input() headingText: any = "";
  @Input() alignment: string = "center";
  @Input() mb: string = "0";
}
