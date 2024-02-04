// import { Injectable } from '@angular/core';
// import { catchError, exhaustMap, filter, map, mergeMap, of } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
// import {
//   cardblockExistsGuardActions,
//   cardblockListPageActions,
//   cardblockApiActions,
// } from '../actions';
// // import { CardblockSelectors } from '@cardblock/state';
// import { CardblockService } from '../cardblock.service';

// @Injectable()
// export class cardblockApiEffects {
//   readonly loadCardblocks$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(cardblockListPageActions.opened),
//       exhaustMap(() => {
//         return this.CardblockService.getAll().pipe(
//           map((Cardblock) =>
//             cardblockApiActions.cardblockLoadedSuccess({ Cardblock })
//           ),
//           catchError((error) =>
//             of(cardblockApiActions.cardblockLoadedFailure({ error }))
//           )
//         );
//       })
//     );
//   });

//   readonly loadCardblockIfNotLoaded$ = createEffect(() => {
//     return this.actions$.pipe(
//       ofType(cardblockExistsGuardActions.entered),
//       concatLatestFrom(({ CardblockSlug }) =>
//         this.store.select(CardblockSelectors.selectBySlug(CardblockSlug))
//       ),
//       filter(([, Cardblock]) => !Cardblock),
//       mergeMap(([{ CardblockSlug }]) => {
//         return this.CardblockService.getBySlug(CardblockSlug).pipe(
//           map((Cardblock) =>
//             cardblockApiActions.cardblockLoadedSuccess({ Cardblock })
//           ),
//           catchError((error) =>
//             of(cardblockApiActions.cardblockLoadedFailure({ error, CardblockSlug }))
//           )
//         );
//       })
//     );
//   });

//   constructor(
//     private readonly actions$: Actions,
//     private readonly store: Store,
//     private readonly CardblockService: CardblockService
//   ) {}
// }