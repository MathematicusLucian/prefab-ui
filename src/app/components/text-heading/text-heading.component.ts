import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-heading.component.html',
  styleUrl: './text-heading.component.sass'
})
export class TextHeadingComponent {
  @Input() headingText: any = "";
  @Input() alignment: string = "center";
  @Input() mb: string = "0";
  @Input() routerLink!: string | null;
  @Input() textColor: string = "white";

  isRouterLink = () => this.routerLink != undefined;
  isHover = () => (this.isRouterLink()) ? "hover:bg-amber-500 hover:text-slate-950 rounded-full cursor-pointer" : "disabled-link";
}
