import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../models/home-module-state.model';
import { homeStoreKey } from '../models/home-app-state.model';
import { HomeDataStats } from '../../models/stat.models';
import { findAll, nonCountryFilter, parseNewValues, tableDataMap } from '../../../../shared/utilities/helper.functions';

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

const selectTableData = () =>
  createSelector(selectHomeState, (homeState: HomeState) => {
    if (!homeState || !homeState.stats) {
      return {} as HomeDataStats;
    }
    return {
      total: homeState.stats.find(findAll),
      tableData: homeState.stats
        .filter(nonCountryFilter)
        .map(tableDataMap),
      highestDeaths: homeState.stats
        .filter(nonCountryFilter)
        .filter((x) => x.deaths.new !== null)
        .sort((a, b) => parseNewValues(b.deaths.new) - parseNewValues(a.deaths.new))[0],
      highestCases: homeState.stats
        .filter(nonCountryFilter)
        .filter((x) => x.cases.new !== null)
        .sort((a, b) => parseNewValues(b.cases.new) - parseNewValues(a.cases.new))[0],
    };
  });

export const homeSelectors = {
  selectHomeData,
  selectHomePageState,
  selectUserLocation,
  selectTableData,
};
