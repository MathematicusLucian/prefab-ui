import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSiteGraph from './reducers'
// import { AppState } from '../models/app-state.model';
import { SiteGraphState } from '../core-state/site-graph.state';

export const selectBlocks = createFeatureSelector<SiteGraphState>("siteGraph"); //selectCore, "core"

// ✨ New 👇
export const selectSiteGraph = createSelector( //select siteGraph from core
  selectBlocks,
  (state: SiteGraphState) => {
    // console.log('x state', state);
    return state.siteGraph;
  }
);

// export const selectBlock = (props: { name: string }) =>
//   createSelector(
//     selectSiteGraph, 
//     (siteGraph) => {
//       console.log('x siteGraph', siteGraph);
//       return siteGraph ? siteGraph.filter((block:any) => block.name === props.name) : []
//     }
//   );