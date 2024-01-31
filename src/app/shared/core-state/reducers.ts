import { createReducer, on } from "@ngrx/store";
import * as SiteGraphActions from "./actions";
import { GraphBlock } from "./../models";

const initialState: any = {
  siteGraph: [{name: 'test', body: {}}]
};

export const siteGraphFeatureKey = 'abc';

export const itemsReducer = createReducer(
  initialState,
  on(SiteGraphActions.addBlock, (state, { block }) => {
   return {   
    ...state,
    siteGraph: [...state.siteGraph, block]
    }
  }),
  on(SiteGraphActions.editBlock, (state, { block }) => state.map((existingItem:any) => existingItem.body === block.body ? block : existingItem)),
  on(SiteGraphActions.deleteBlock, (state, { name }) => state.filter((block:any) => block.name !== name))
);