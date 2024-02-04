import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../models/heading-block.model';
import { TextHeadingComponent } from '../text-heading/text-heading.component';
import { TaglineComponent } from '../tagline/tagline.component';
import { TaglineSmallComponent } from '../tagline-small/tagline-small.component';

@Component({
  selector: 'app-heading-block',
  standalone: true,
  imports: [TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './heading-block.component.html',
  styleUrl: './heading-block.component.sass'
})
export class HeadingBlockComponent implements OnInit {
  @Input() headingData$: any = "";
  headingText: string = "";
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
        this.taglineText = y.taglineText;
        this.taglineSmallText = y.taglineSmallText;
        this.alignment = y.alignment;
        this.fontWeight = y.fontWeight;
        this.mb = y.mb;
      });
    });
  }
  
}