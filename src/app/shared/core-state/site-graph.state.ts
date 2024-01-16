import { GraphBlock } from "../models/graph-block.model";

export interface SiteGraphState {
  [x: string]: any;
  siteGraph: GraphBlock[];
}

export const initialState: SiteGraphState = {
  siteGraph: [],
};