import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { of } from 'rxjs';
import { TaglineComponent } from '../../tagline/tagline.component';
import { TextHeadingComponent } from '../../text-heading/text-heading.component';
import { TaglineSmallComponent } from '../../tagline-small/tagline-small.component';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'cardblock',
  standalone: true,
  imports: [CommonModule, CardComponent, TextHeadingComponent, TaglineComponent, TaglineSmallComponent, CardblockComponent],
  templateUrl: './cardblock.component.html',
  styleUrl: './cardblock.component.sass'
})
export class CardblockComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data$: any;
  cardblockData$: Card[] = [];
  
  constructor() {}

  ngOnInit() {
    this.data$.subscribe((x: any) => {
      console.log('x0-a', x);
      this.cardblockData$ = x;
    }); 
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}