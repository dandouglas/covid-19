import { Injectable } from '@angular/core';
import { HomeState, HomePageState } from '../store/models/home-module-state.model';
import { Store, Action } from '@ngrx/store';
import { homeSelectors } from '../store/selectors/home-selectors';
import { Observable } from 'rxjs';
import { HomeDataStats } from '../models/stat.models';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  constructor(
    private store: Store<HomeState>,
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getTableData(): Observable<HomeDataStats> {
    return this.store.select(homeSelectors.selectTableData());
  }

  getHomePageState(): Observable<HomePageState> {
    return this.store.select(homeSelectors.selectHomePageState());
  }

  getUserLocation(): Observable<string> {
    return this.store.select(homeSelectors.selectUserLocation());
  }

}

