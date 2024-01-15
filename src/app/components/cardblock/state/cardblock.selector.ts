// import { createSelector } from '@ngrx/store';
// import { selectRouteParam } from './../../../core/routes/router.selector';
// import { cardblockReducer } from './cardblock.reducers';

// export const {
//   selectCardblocksState,
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectIsLoading,
// } = cardblockReducer;

// export const selectFromRoute = createSelector(
//   selectEntities,
//   selectRouteParam('slug'),
//   (entities, slug) => (slug ? entities[slug] : undefined)
// );

// export const selectBySlug = (slug: string) =>
//   createSelector(selectEntities, (entities) => entities[slug]);