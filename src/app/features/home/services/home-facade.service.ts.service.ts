import { Injectable } from '@angular/core';
import { HomeState } from '../store/models/home-module-state.model';
import { Store, Action } from '@ngrx/store';
import { homeSelectors } from '../store/selectors/home-selectors';
import { Observable } from 'rxjs';
import { CountryStat } from '../../dashboard/models/country-stat';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  constructor(
    private store: Store<HomeState>
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getData(): Observable<CountryStat[]> {
    return this.store.select(homeSelectors.selectHomeData());
  }

  getDataForAllCountries(): Observable<CountryStat> {
    return this.getData().pipe(
      map((data: CountryStat[]) => data
        .find(stat => stat.country === 'All')
        ));
  }
}
