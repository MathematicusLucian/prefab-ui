import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-heading.component.html',
  styleUrl: './text-heading.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextHeadingComponent implements OnInit, OnChanges {
  @Input() headingText: any = "empty";
  @Input() alignment: string = "center";
  @Input() mb: string = "0";
  @Input() routerLink!: string | null;
  @Input() textColor: string = "white";
  @Input() fontWeight: string = "semibold";
  textSizeSet!: any;
  @Input() set textSize (size: any) {
    this.textSizeSet = size|15;
  }
  mainCSS!: string;
  mainStyle!: string;

  ngOnInit() {}

  ngOnChanges(changes: any) {
    this.headingText = (changes.headingText != undefined) ? changes.headingText.currentValue : this.headingText;
    this.routerLink = (changes.routerLink != undefined) ? changes.routerLink.currentValue : this.routerLink;
    const alignment = (changes.alignment != undefined) ? changes.alignment.currentValue : this.alignment;  
    const mb = (changes.mb != undefined) ? changes.mb.currentValue : this.mb; 
    const fontWeight = (changes.fontWeight != undefined) ? changes.fontWeight.currentValue : this.fontWeight;
    const textColor = (changes.textColor != undefined) ? changes.textColor.currentValue : this.textColor;
    let textSize = (changes.textSize != undefined) ? changes.textSize.currentValue : this.textSize;
    this.mainCSS = "mb-" + mb + " font-" + fontWeight + " block text-" + textColor + " tracking-narrow md:text-" + this.textSizeSet + " md:text-" + alignment + " " + this.isHover(); 
    this.mainStyle = "font-size: " + textSize +"px !important";
  }

  isRouterLink = () => this.routerLink != undefined;
  isHover = () => (this.isRouterLink()) ? "hover:bg-amber-500 hover:text-slate-950 rounded-full cursor-pointer" : "disabled-link";
}