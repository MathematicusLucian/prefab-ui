import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.sass'
})
export class BadgeComponent implements OnChanges {
  @Input() badgeText: string = "";
  badgeText$: string = "";

  ngOnChanges(change:any){
    this.badgeText$ = change.badgeText.currentvalue;
  }
}
