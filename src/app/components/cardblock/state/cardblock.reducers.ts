import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Cardblock } from '../cardblock.model';
import {
  cardblockListPageActions,
  cardblockApiActions,
} from '../actions';

interface State extends EntityState<Cardblock> {
  isLoading: boolean;
}

const adapter = createEntityAdapter<Cardblock>();

const initialState: State = adapter.getInitialState({ 
  isLoading: false 
});

export const cardblockReducer = createReducer(
  initialState,
  on(cardblockListPageActions.opened, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(cardblockApiActions.cardblockLoadedSuccess, (state, { cardblock }) =>
    adapter.setAll(cardblock, {
      ...state,
      isLoading: false,
    })
  )
);

export const cardblockFeatureKey = 'abc';

// const feature = createFeature({ name: 'cardblocks', reducer });

// const { selectAll } = adapter.getSelectors(feature.selectCardblocksState);

// export const cardblocksFeature = { ...feature, selectAll };