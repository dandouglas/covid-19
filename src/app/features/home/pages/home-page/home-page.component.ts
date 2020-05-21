import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomeService } from '../../services/home.service';
import { map, skip } from 'rxjs/operators';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  data$: Observable<any>;
  homePageState$: Observable<HomePageState>;
  userLocation$: Observable<string>;
  localStats$: Observable<any>;

  constructor(
    private homeFacadeService: HomeFacadeService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.data$ = this.homeFacadeService.getData();
    this.homePageState$ = this.homeFacadeService.getHomePageState();
    this.userLocation$ = this.homeFacadeService.getUserLocation();
    this.localStats$ = combineLatest([this.homeFacadeService.getData(), this.userLocation$]).pipe(
      skip(1),
      map(([stats, location]) => {
        const res = stats.tableData.find((stat) => stat.data.country === location) ||
          stats.tableData.find((stat) => stat.data.country === 'UK');
        return res.data;
      }));
    this.homeService.getLocation();
  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

}
