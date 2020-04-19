import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Home Page] Enter page',
);

export const HomePageActions = {
  enterPage,
};
