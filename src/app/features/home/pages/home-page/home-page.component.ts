import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  data$: Observable<any>;
  homePageState$: Observable<HomePageState>;

  constructor(
    private homeFacadeService: HomeFacadeService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.data$ = this.homeFacadeService.getData();
    this.homePageState$ = this.homeFacadeService.getHomePageState();
    this.homeService.getLocation();
  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

}
