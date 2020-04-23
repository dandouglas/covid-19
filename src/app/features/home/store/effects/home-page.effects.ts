import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HomePageActions } from '../actions/home-page.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HomeApiService } from '../../services/home-api.service';
import { CountryStat } from '../../../dashboard/models/country-stat';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { HomeApiActions } from '../actions/home-api.actions';

@Injectable()
export class HomePageEffects {

  constructor(
    private actions$: Actions,
    private homeApiService: HomeApiService,
  ) { }

  homePageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.enterPage),
      switchMap(() => this.homeApiService.getWorldData()
        .pipe(
          map((stats: CountryStat[]) => HomeApiActions.getHomePageDataSuccess({ stats })),
          catchError((err: HttpErrorResponse) => of(HomeApiActions.getHomePageDataFailure({ error: err.message })))
        )))
  );

}
