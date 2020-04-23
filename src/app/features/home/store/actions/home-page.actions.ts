import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Home Page] Enter page',
);

const leavePage = createAction(
  '[Home Page] Leave page',
);

export const HomePageActions = {
  enterPage,
  leavePage,
};
