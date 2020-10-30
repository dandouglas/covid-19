import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { of } from 'rxjs';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeDataStats } from '../../models/stat.models';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { MockComponent, MockDirective, MockService } from 'ng-mocks';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NbCardBodyComponent, NbCardHeaderComponent, NbSpinnerDirective } from '@nebular/theme';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  const mockHomeFacadeService = MockService(HomeFacadeService);

  const mockHomePageState: HomePageState = {
    initialising: false,
    searchTerm: ''
  };

  const mockData: HomeDataStats = {
    total: undefined,
    tableData: [],
    highestDeaths: undefined,
    highestCases: undefined,
  };

  const mockLocation = 'GB';

  beforeEach(async(() => {
    mockHomeFacadeService.getHomePageState = jasmine.createSpy('getHomePageState').and.returnValue(of(mockHomePageState));
    mockHomeFacadeService.getUserLocation = jasmine.createSpy('getUserLocation').and.returnValue(of(mockLocation));
    mockHomeFacadeService.getStats = jasmine.createSpy('getStats').and.returnValue(of(mockData));

    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        MockComponent(FaIconComponent),
        MockComponent(NbCardHeaderComponent),
        MockComponent(NbCardBodyComponent),
        MockDirective(NbSpinnerDirective),
      ],
      providers: [
        { provide: HomeFacadeService, useValue: mockHomeFacadeService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch the page enter action', () => {
      expect(mockHomeFacadeService.dispatch).toHaveBeenCalledWith(HomePageActions.enterPage());
    });

    it('should get the data', () => {
      expect(mockHomeFacadeService.getStats).toHaveBeenCalled();
    });

    it('should define the data correctly', async () => {
      const data = await component.stats$.toPromise();
      expect(data).toEqual(mockData);
    });

    it('should get the home page state', () => {
      expect(mockHomeFacadeService.getHomePageState).toHaveBeenCalled();
    });

    it('should define the home page state correctly', async () => {
      const pageState = await component.homePageState$.toPromise();
      expect(pageState).toEqual(mockHomePageState);
    });

    it('should get the users location', () => {
      expect(mockHomeFacadeService.getUserLocation).toHaveBeenCalled();
    });

    it('should define the users location correctly', async () => {
      const location = await component.userLocation$.toPromise();
      expect(location).toEqual(mockLocation);
    });

    it('should set up the local stats', fakeAsync(() => {
      tick();
      expect(component.localStats$).toBeDefined();
    }));
  });

  describe('ngOnDestroy', () => {
    it('should dispatch the leave page action', () => {
      component.ngOnDestroy();
      expect(mockHomeFacadeService.dispatch).toHaveBeenCalledWith(HomePageActions.leavePage());
    });
  });

});
