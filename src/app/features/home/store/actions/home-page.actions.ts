import { createAction, props } from '@ngrx/store';

const enterPage = createAction(
    '[Home Page] Enter page',
    props<{ moduleId: number; appName: string }>(),
);

export const HomePageActions = {
  enterPage,
};
