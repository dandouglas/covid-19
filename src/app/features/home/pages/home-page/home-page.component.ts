import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryStat } from '../../../dashboard/models/country-stat';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeFacadeService } from '../../services/home-facade.service';

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
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.data$ = this.homeFacadeService.getData();
    this.homePageState$ = this.homeFacadeService.getHomePageState();
  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

}
