import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { cardblockListPageActions } from '../actions';
// import { cardblocksSelectors } from '@cardblocks/state';

@Component({
  template: `
    <h2>cardblocks</h2>

    <!-- <p *ngIf="isLoading$ | async; else cardblockList">Loading...</p> -->

    <ng-template #cardblockList>
      <ul>
        <!-- <li *ngFor="let cardblock of cardblocks$ | async">
          <a [routerLink]="['/cardblocks', cardblock.id]">{{ cardblock.name }}</a>
        </li> -->
      </ul>
    </ng-template>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class cardblockListComponent implements OnInit {
  // readonly cardblocks$ = this.store.select(cardblocksSelectors.selectAll);
  // readonly isLoading$ = this.store.select(cardblocksSelectors.selectIsLoading);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(cardblockListPageActions.opened());
  }
}