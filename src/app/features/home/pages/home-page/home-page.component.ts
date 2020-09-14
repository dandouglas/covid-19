import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, combineLatest, Subject } from 'rxjs';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeFacadeService } from '../../services/home-facade.service';
import { faGlobe, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../services/home.service';
import { HomeDataStats, LocalStats } from '../../models/stat.models';

@Component({
  selector: 'cv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  stats$: Observable<HomeDataStats>;
  homePageState$: Observable<HomePageState>;
  userLocation$: Observable<string>;
  localStats$: Observable<LocalStats>;
  faGlobe = faGlobe;
  faClock = faClock;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor(
    private homeFacadeService: HomeFacadeService,
    private homeService: HomeService,
  ) { }

  ngOnInit() {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
    this.stats$ = this.homeFacadeService.getStats();
    this.homePageState$ = this.homeFacadeService.getHomePageState();
    this.userLocation$ = this.homeFacadeService.getUserLocation();
    this.localStats$ = this.homeService.getLocalStats(this.stats$, this.userLocation$);
  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

}
