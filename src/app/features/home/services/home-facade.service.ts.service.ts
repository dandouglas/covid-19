import { Injectable } from '@angular/core';
import { HomeState } from '../store/models/home-module-state.model';
import { Store, Action } from '@ngrx/store';

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
}
