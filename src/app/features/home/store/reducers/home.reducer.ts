import { HomeState } from '../models/home-module-state.model';
import { createReducer, on, Action } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page.actions';

export const initialState: HomeState = {
  stats: undefined
};

const homeReducerFn = createReducer(
  initialState,
  on(HomePageActions.enterPage, (state) => ({
      ...state,
      homePageState: {
          initialising: true,
          searchTerm: '',
      }
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return homeReducerFn(state, action);
}
