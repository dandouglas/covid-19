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

  constructor(
    private homeApiService: HomeApiService,
  ) { }

  ngOnInit() {
    this.data$ = this.homeApiService.getWorldData();

    this.totalDeaths$ = this.homeApiService.getWorldData().pipe(
      map((data: CountryStat[]) => data.reduce((total, stat) => total + stat.deaths.total, 0).toLocaleString())
    );

    this.totalCases$ = this.homeApiService.getWorldData().pipe(
      map((data: CountryStat[]) => data.reduce((total, stat) => total + stat.cases.total, 0).toLocaleString())
    );
  }

}
