import { HomeState } from '../models/home-module-state.model';
import { createReducer, on, Action } from '@ngrx/store';
import { HomePageActions } from '../actions/home-page.actions';
import { HomeApiActions } from '../actions/home-api.actions';

export const initialState: HomeState = {
  stats: undefined,
  homePageState: undefined,
};

const homeReducerFn = createReducer(
  initialState,
  on(HomePageActions.enterPage, (state) => ({
    ...state,
    homePageState: {
      initialising: true,
      searchTerm: '',
    }
  })),
  on(HomeApiActions.getHomePageDataSuccess, (state, { stats }) => ({
    ...state,
    stats,
    homeState: {
      ...state.homePageState,
      initialising: false,
    }
  }))
);

export function homeReducer(state: HomeState | undefined, action: Action) {
  return homeReducerFn(state, action);
}
