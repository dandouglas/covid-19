import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../models/home-module-state.model';
import { homeStoreKey } from '../models/home-app-state.model';
import { CountryStat, HomeDataStats } from '../../models/stat.models';

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

// TODO: Move helper methods to another file

function findAll(stat: CountryStat): boolean {
  return stat.country === 'All';
}

function nonCountryFilter(stat: CountryStat): boolean {
  return stat.country !== 'All' && stat.country !== 'Europe' && stat.country !== 'North-America'
    && stat.country !== 'Asia' && stat.country !== 'Diamond-Princess-';
}

function tableDataMap(stat: CountryStat): any {
  return {
    data: {
      country: stat.country,
      totalCases: stat.cases.total,
      newCases: stat.cases.new !== null ? parseInt(stat.cases.new.replace('+', ''), 10) : null,
      totalDeaths: stat.deaths.total,
      newDeaths: stat.deaths.new !== null ? parseInt(stat.deaths.new.replace('+', ''), 10) : null,
      critical: stat.cases.critical,
      recovered: stat.cases.active,
    }
  };
}

/*
  * Takes a string with a + symbol at the beginning followed by a number (eg "+123")
  * and returns the number value
  */
function parseNewValues(val: string): number {
  return parseInt(val.replace('+', ''), 10);
}
