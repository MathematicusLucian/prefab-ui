// import { Injectable } from '@angular/core';
// import { delay, Observable, of, throwError } from 'rxjs';
// import { Cardblock } from './cardblock.model';

// const cardblockData: Cardblock[] = [
//     { id: '1', name: 'abc', slug: 'def' },
//     { id: '2', name: 'ghi', slug: 'jkl' },
// ];

// @Injectable({
//   providedIn: 'root',
// })
// export class CardblockService {
//   getAll(): Observable<Cardblock[]> {
//     return of(cardblockData).pipe(delay(1000));
//   }

//   getBySlug(slug: string): Observable<Cardblock> {
//     const cardblock = cardblockData.find((m) => m.slug === slug);

//     return cardblock
//       ? of(cardblock).pipe(delay(500))
//       : throwError(() => `Cardblock with slug ${slug} does not exist!`);
//   }
// }