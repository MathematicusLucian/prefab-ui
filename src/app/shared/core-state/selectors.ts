import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSiteGraph from './reducers'
// import { AppState } from '../models/app-state.model';
import { SiteGraphState } from '../core-state/site-graph.state';

// export const selectSiteGraphState =
//   createFeatureSelector<fromSiteGraph.SiteGraphState>('site-graph');

// export const selectAllBlocks = createSelector(
//   (state: AppState) => state.graphBlock,
//   graphBlock => graphBlock
// );

export const selectBlocks = createFeatureSelector<SiteGraphState>("siteGraph");

// ✨ New 👇
export const selectSiteGraph = createSelector(
  selectBlocks,
  (state: SiteGraphState) => state //.siteGraph
);

// export const selectBlock = (props: { name: string }) =>
//   createSelector(selectSiteGraph, (siteGraph) =>
//     siteGraph.find((block) => block.name === props.name)
//   );