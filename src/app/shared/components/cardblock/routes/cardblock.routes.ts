import { Route } from '@angular/router';
import { provideState } from '@ngrx/store';
// import {
//   provideFeatureEffects,
//   provideStoreFeature,
// } from '../../../core/core-state/ngrx';
// import { cardblocksFeature } from '@cardblock/state';
import { cardblockFeatureKey, cardblockReducer } from '../state/cardblock.reducers';
import { cardblockListComponent } from '../containers/cardblock-list.component';
import { cardblockDetailsComponent } from '../containers/cardblock-details.component';
// import { cardblockApiEffects } from '../effects/cardblock-api.effects';
// import { CardblockExistsGuard } from './cardblock-exists.guard';

export const cardblocksRoutes: Route[] = [
  {
    path: '',
    children: [
      { 
        path: '', 
        component: cardblockListComponent, 
        // loadComponent: () => 
        //     import('../layouts/cardblock/containers/cardblock.component').then(m => m.ProjectsComponent),
        title: 'cardblocks' ,
        providers: [
          provideState({ name: cardblockFeatureKey, reducer: cardblockReducer })
        ]
      },
      {
        path: ':slug',
        component: cardblockDetailsComponent,
        // title: 'cardblock Details',
        // canActivate: [CardblockExistsGuard],
      },
    ],
    providers: [
      // provideStoreFeature(cardblocksFeature),
      // provideFeatureEffects([cardblockApiEffects]),
    ],
  },
];