import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { HomePageActions } from '../actions/home-page.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { HomeApiService } from '../../services/home-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of, forkJoin } from 'rxjs';
import { HomeApiActions } from '../actions/home-api.actions';
import { HomeService } from '../../services/home.service';

@Injectable()
export class HomePageEffects {

  constructor(
    private actions$: Actions,
    private homeApiService: HomeApiService,
    private homeService: HomeService,
  ) { }

  homePageData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomePageActions.enterPage),
      switchMap(() => forkJoin([this.homeApiService.getWorldData(), this.homeService.getLocation()])
        .pipe(
          map(([stats, userLocation]) => {
            let loc = 'UK';
            const geocoder = new google.maps.Geocoder();
            const request: google.maps.GeocoderRequest = {
              location: new google.maps.LatLng({ lat: userLocation.latitude, lng: userLocation.longitude })
            };
            geocoder.geocode(request, (results, status) => {
              if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                  loc = this.homeService.getCountry(results);
                }
              }
            });
            return HomeApiActions.getHomePageDataSuccess({ stats, userLocation: loc });
          }),
          catchError((err: HttpErrorResponse) => of(HomeApiActions.getHomePageDataFailure({ error: err.message })))
        )))
  );

}
