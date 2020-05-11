import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../models/home-module-state.model';
import { homeStoreKey } from '../models/home-app-state.model';

const selectHomeState = createFeatureSelector<HomeState>(homeStoreKey);

const selectHomeData = () =>
    createSelector(selectHomeState, (homeState: HomeState) => {
        if (!homeState || !homeState.stats) {
            return [];
        }
        return homeState.stats;
});

const selectHomePageState = () =>
  createSelector(selectHomeState, (homeState: HomeState) => homeState.homePageState);

const selectUserLocation = () =>
  createSelector(selectHomeState, (homeState: HomeState) => homeState.userLocation);

export const homeSelectors = {
  selectHomeData,
  selectHomePageState,
  selectUserLocation,
};
