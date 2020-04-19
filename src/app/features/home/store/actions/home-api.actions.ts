import { createAction, props } from '@ngrx/store';
import { CountryStat } from '../../../dashboard/models/country-stat';

const getHomePageDataSuccess = createAction(
  '[Home API] Get Home Page Data Success',
  props<{ stats: CountryStat[] }>(),
);

const getHomePageDataFailure = createAction(
  '[Home API] Get Home Page Data Failure',
  props<{ error: string }>(),
);

export const HomeApiActions = {
  getHomePageDataSuccess,
  getHomePageDataFailure
};
