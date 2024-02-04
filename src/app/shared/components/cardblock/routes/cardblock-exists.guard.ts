// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   UrlTree,
// } from '@angular/router';
// import { filter, map, Observable, race, take } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { Actions, ofType } from '@ngrx/effects';
// import {
//   cardblockExistsGuardActions,
//   cardblockApiActions,
// } from '../actions';
// // import { cardblockSelectors } from '@cardblock/state';

// @Injectable({
//   providedIn: 'root',
// })
// export class CardblockExistsGuard implements CanActivate {
//   constructor(
//     private readonly store: Store,
//     private readonly actions$: Actions,
//     private readonly router: Router
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot
//   ): Observable<true | UrlTree> | UrlTree {
//     const cardblockSlug = route.params['slug'];
//     const allcardblockUrl = this.router.parseUrl('/cardblock');
//     this.store.dispatch(cardblockExistsGuardActions.entered({ cardblockSlug }));

//     return this.hasCardblockInStore(cardblockSlug).pipe(
//       map((cardblockExists) => cardblockExists || allcardblockUrl),
//       take(1)
//     );
//   }

//   private hasCardblockInStore(cardblockSlug: string): Observable<boolean> {
//     return race(
//       this.store.select(cardblockSelectors.selectById(cardblockSlug)).pipe(
//         filter(Boolean),
//         map(() => true)
//       ),
//       this.actions$.pipe(
//         ofType(cardblockApiActions.cardblockLoadedFailure),
//         filter((action) => action.cardblockSlug === cardblockSlug),
//         map(() => false)
//       )
//     );
//   }
// }