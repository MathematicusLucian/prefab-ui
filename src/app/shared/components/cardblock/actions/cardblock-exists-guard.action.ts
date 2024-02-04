import { createAction, props } from '@ngrx/store';

export const entered = createAction(
  '[Cardblock Exists Guard] Can Activate Entered',
  props<{ cardblockSlug: string }>()
);