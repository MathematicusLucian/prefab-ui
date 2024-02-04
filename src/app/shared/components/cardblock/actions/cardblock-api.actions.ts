import { createAction, props } from '@ngrx/store';
import { Cardblock } from '../cardblock.model';

export const cardblockLoadedSuccess = createAction(
  '[Cardblock API] Cardblock Loaded Successfully',
  props<{ cardblock: Cardblock[] }>()
);

export const cardblockLoadedFailure = createAction(
  '[Cardblock API] Failed to Load Cardblock',
  props<{ error: Error }>()
);