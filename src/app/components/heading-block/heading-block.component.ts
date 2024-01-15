import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeadingBlock } from '../../shared/models/heading-block.model';
import { TextHeadingComponent } from '../../components/text-heading/text-heading.component';
import { TaglineComponent } from '../../components/tagline/tagline.component';
import { TaglineSmallComponent } from '../../components/tagline-small/tagline-small.component';

@Component({
  selector: 'app-heading-block',
  standalone: true,
  imports: [TextHeadingComponent, TaglineComponent, TaglineSmallComponent],
  templateUrl: './heading-block.component.html',
  styleUrl: './heading-block.component.sass'
})
export class HeadingBlockComponent implements OnInit {
  @Input() headingData$: any = of({
    headingText: '',
    taglineText: '',
    taglineSmallText: '',
    alignment: '',
    mb: 0
  });
  headingText: string = "";
  taglineText: string = "";
  taglineSmallText: string = "";
  alignment: string = "";
  mb: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.headingData$.map((x:any) => {
      x.subscribe((y:any) => {
        this.headingText = y.headingText;
        this.taglineText = y.taglineText;
        this.taglineSmallText = y.taglineSmallText;
        this.alignment = y.alignment;
        this.mb = y.mb;
      });
    });
  }
  
}