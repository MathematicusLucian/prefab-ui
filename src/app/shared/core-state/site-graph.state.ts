import { GraphBlock } from "../models/graph-block.model";

export interface SiteGraphState {
  siteGraph: GraphBlock[];
}

export const initialState: SiteGraphState = {
  siteGraph: [],
};