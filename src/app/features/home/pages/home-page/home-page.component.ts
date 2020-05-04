import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryStat } from '../../../dashboard/models/country-stat';
import { HomeFacadeService } from '../../services/home-facade.service.ts.service';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { HomeService } from '../../services/home.service';
import { HomePageState } from '../../store/models/home-module-state.model';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  data$: Observable<any>;
  totalDeaths$: Observable<string>;
  totalCases$: Observable<string>;
  totalRecovered$: Observable<string>;
  totalDeathsToday$: Observable<string>;
  countryWithHighestTotalDeaths$: Observable<CountryStat>;
  all$: Observable<CountryStat>;
  homePageState$: Observable<HomePageState>;

  constructor(
    private homeFacadeService: HomeFacadeService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.data$ = this.homeFacadeService.getData().pipe(
      map((stats: CountryStat[]) => ({
        total: stats.find(this.homeService.findAll),
        tableData: stats
          .filter(this.homeService.nonCountryFilter)
          .map(this.homeService.tableDataMap),
        highestDeaths: stats
          .filter(this.homeService.nonCountryFilter)
          .filter((x) => x.deaths.new !== null)
          .sort((a, b) => {
            return parseInt(b.deaths.new.replace('+', ''), 10) - parseInt(a.deaths.new.replace('+', ''), 10);
          })[0],
        highestCases: stats
          .filter(this.homeService.nonCountryFilter)
          .filter((x) => x.cases.new !== null)
          .sort((a, b) => {
            return parseInt(b.cases.new.replace('+', ''), 10) - parseInt(a.cases.new.replace('+', ''), 10);
          })[0],
        })));

    this.homePageState$ = this.homeFacadeService.getHomePageState();
    this.all$ = this.homeFacadeService.getDataForAllCountries();

    // this.totalDeaths$ = this.data$.pipe(
    //   map((data: CountryStat[]) => data
    //     .filter((stat) => stat.deaths.new !== null)
    //     .filter((stat: CountryStat) => stat.country !== 'All')
    //     .reduce((total, stat) => total + stat.deaths.total, 0).toLocaleString())
    // );

    // this.totalDeathsToday$ = this.data$.pipe(
    //   map((data: CountryStat[]) => data
    //     .filter((stat) => stat.deaths.new !== null)
    //     .filter((stat: CountryStat) => stat.country !== 'All')
    //     .reduce((total, stat) => total + parseInt(stat.deaths.new.replace('+', ''), 10), 0).toLocaleString())
    // );

    // this.totalCases$ = this.data$.pipe(
    //   map((data: CountryStat[]) => data
    //     .filter((stat: CountryStat) => stat.country !== 'All')
    //     .reduce((total, stat) => total + stat.cases.total, 0).toLocaleString())
    // );

    // this.totalRecovered$ = this.data$.pipe(
    //   map((data: CountryStat[]) => data
    //     .filter((stat: CountryStat) => stat.country !== 'All')
    //     .reduce((total, stat) => total + stat.cases.recovered, 0).toLocaleString())
    // );

    // this.countryWithHighestTotalDeaths$ = this.data$.pipe(
    //   map((data: CountryStat[]) =>  data
    //     .filter((stat: CountryStat) => stat.country !== 'All')
    //     .reduce((prev, current) => (prev.deaths.total > current.deaths.total) ? prev : current))
    // );

  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

}
