import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryStat } from '../../../dashboard/models/country-stat';
import { HomeFacadeService } from '../../services/home-facade.service.ts.service';
import { HomePageActions } from '../../store/actions/home-page.actions';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  data$: Observable<any>;
  totalDeaths$: Observable<string>;
  totalCases$: Observable<string>;
  totalRecovered$: Observable<string>;
  totalDeathsToday$: Observable<string>;
  countryWithHighestTotalDeaths$: Observable<CountryStat>;
  all$: Observable<CountryStat>;

  constructor(
    private homeFacadeService: HomeFacadeService,
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.data$ = this.homeFacadeService.getData().pipe(
      map((stats: CountryStat[]) => ({
        total: stats.find(stat => stat.country === 'All'),
      }))
    );

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

}
