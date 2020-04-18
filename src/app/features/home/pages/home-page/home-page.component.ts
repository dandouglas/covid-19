import { Component, OnInit } from '@angular/core';
import { HomeApiService } from '../../services/home-api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryStat } from '../../../dashboard/models/country-stat';

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

  constructor(
    private homeApiService: HomeApiService,
  ) { }

  ngOnInit() {
    this.data$ = this.homeApiService.getWorldData();

    this.totalDeaths$ = this.data$.pipe(
      map((data: CountryStat[]) => data
        .filter((stat) => stat.deaths.new !== null)
        .reduce((total, stat) => total + stat.deaths.total, 0).toLocaleString())
    );

    this.totalDeathsToday$ = this.data$.pipe(
      map((data: CountryStat[]) => data
        .filter((stat) => stat.deaths.new !== null)
        .reduce((total, stat) => total + parseInt(stat.deaths.new.replace('+', ''), 10), 0).toLocaleString())
    );

    this.totalCases$ = this.data$.pipe(
      map((data: CountryStat[]) => data.reduce((total, stat) => total + stat.cases.total, 0).toLocaleString())
    );

    this.totalRecovered$ = this.data$.pipe(
      map((data: CountryStat[]) => data.reduce((total, stat) => total + stat.cases.recovered, 0).toLocaleString())
    );

  }

}
