import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { of } from 'rxjs';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'cardblock',
  standalone: true,
  imports: [CommonModule, CardComponent, CardblockComponent],
  templateUrl: './cardblock.component.html',
  styleUrl: './cardblock.component.sass'
})
export class CardblockComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data$: any;
  cardblockData$: Card[] = [];
  
  constructor() {}

  ngOnInit() {
    this.data$.subscribe((x: any) => {
      this.cardblockData$ = x;
    }); 
  }

  ngAfterViewInit() {}

  ngOnDestroy() {}
}