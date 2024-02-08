import { createAction, props } from "@ngrx/store";
import { GraphBlock } from "../models";

export enum CoreActionType {
    ADD_SITE_ITEM = "[SiteGraph] Add Block",
  }

export const appLoaded = createAction("[App] App Loaded");

// export const fetchBlockSuccess = createAction(
//   "[SiteGraph] Fetch Block Success",
//   props<{ siteGraph: GraphBlock[] }>()
// );

// export const fetchBlockFailed = createAction(
//   "[SiteGraph] Fetch Block Failed",
//   props<{ error: any }>()
// );

export const addBlock = createAction(
	CoreActionType.ADD_SITE_ITEM,
	props<{ block: GraphBlock }>()
);

export const editBlock = createAction(
	"[SiteGraph] Edit Block",
	props<{ block: GraphBlock }>()
);

export const deleteBlock = createAction(
	"[SiteGraph] Delete Block",
	props<{ name: string }>()
);