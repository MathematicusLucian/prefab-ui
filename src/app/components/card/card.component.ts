import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit } from '@angular/core';
import { of } from 'rxjs';

export interface Card {
  project_url: string;
  img_src: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent implements OnInit, AfterViewInit, OnChanges {
  cardDetails$!: Card;
  @Input() cardDetails!: Card | any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() { }
        
  ngOnChanges(changes: any) {
    this.cardDetails$ = JSON.parse(changes.cardDetails.currentValue);
  }
}
