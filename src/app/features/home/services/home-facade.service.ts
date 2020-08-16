import { Injectable } from '@angular/core';
import { HomeState, HomePageState } from '../store/models/home-module-state.model';
import { Store, Action } from '@ngrx/store';
import { homeSelectors } from '../store/selectors/home-selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeService } from './home.service';
import { CountryStat, HomeDataStats } from '../models/stat.models';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  constructor(
    private store: Store<HomeState>,
    private homeService: HomeService,
  ) { }

  dispatch(action: Action): void {
    this.store.dispatch(action);
  }

  getData(): Observable<HomeDataStats> {
    return this.store.select(homeSelectors.selectHomeData()).pipe(
      map((stats: CountryStat[]) => ({
        total: stats.find(this.homeService.findAll),
        tableData: stats
          .filter(this.homeService.nonCountryFilter)
          .map(this.homeService.tableDataMap),
        highestDeaths: stats
          .filter(this.homeService.nonCountryFilter)
          .filter((x) => x.deaths.new !== null)
          .sort((a, b) => this.parseNewValues(b.deaths.new) - this.parseNewValues(a.deaths.new))[0],
        highestCases: stats
          .filter(this.homeService.nonCountryFilter)
          .filter((x) => x.cases.new !== null)
          .sort((a, b) => this.parseNewValues(b.cases.new) - this.parseNewValues(a.cases.new))[0],
      })));
  }

  getHomePageState(): Observable<HomePageState> {
    return this.store.select(homeSelectors.selectHomePageState());
  }

  getUserLocation(): Observable<string> {
    return this.store.select(homeSelectors.selectUserLocation());
  }

  /*
  * Takes a string with a + symbol at the beginning followed by a number (eg "+123")
  * and returns the number value
  */
  private parseNewValues(val: string): number {
    return parseInt(val.replace('+', ''), 10);
  }
}

