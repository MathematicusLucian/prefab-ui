import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSiteGraph from './reducers'
// import { AppState } from '../models/app-state.model';
import { SiteGraphState } from '../core-state/site-graph.state';

export const selectBlocks = createFeatureSelector<SiteGraphState>("siteGraph"); //selectCore, "core"

// ✨ New 👇
export const selectSiteGraph = createSelector( //select siteGraph from core
  selectBlocks,
  (state: SiteGraphState) => {
    return state.siteGraph;
  }
);

// export const selectBlock = (props: { name: string }) =>
//   createSelector(
//     selectSiteGraph, 
//     (siteGraph) => {
//       return siteGraph ? siteGraph.filter((block:any) => block.name === props.name) : []
//     }
//   );