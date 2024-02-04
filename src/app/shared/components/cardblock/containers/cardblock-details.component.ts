import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
// import { cardblocksSelectors } from '@cardblocks/state';

@Component({
  template: `
    <h2>Cardblock Details</h2>

    <!-- <ng-container *ngIf="cardblock$ | async as cardblock">
      <p><b>Name:</b> {{ cardblock }}</p>
    </ng-container> -->
  `,
  standalone: true,
  imports: [CommonModule],
})
export class cardblockDetailsComponent {
  // readonly cardblock$ = this.store.select(cardblocksSelectors.selectFromRoute);

  constructor(private readonly store: Store) {}
}