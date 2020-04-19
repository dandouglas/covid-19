import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../models/home-module-state.model';
import { homeStoreKey } from '../models/home-app-state.model';

const selectHomeState = createFeatureSelector<HomeState>(homeStoreKey);

const selectHomeData = () =>
    createSelector(selectHomeState, (homeState) => {
        if (!homeState || !homeState.stats) {
            return [];
        }
        return homeState.stats;
});

export const homeSelectors = {
  selectHomeData,
};
