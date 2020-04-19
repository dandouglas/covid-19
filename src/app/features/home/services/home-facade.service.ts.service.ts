import { Injectable } from '@angular/core';
import { HomeState } from '../store/models/home-module-state.model';
import { Store, Action } from '@ngrx/store';
import { homeSelectors } from '../store/selectors/home-selectors';

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

  getData(): any {
    return this.store.select(homeSelectors.selectHomeData());
  }
}
