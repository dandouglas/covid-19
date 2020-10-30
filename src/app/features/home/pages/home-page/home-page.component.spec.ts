import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { of } from 'rxjs';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeDataStats } from '../../models/stat.models';
import { HomePageActions } from '../../store/actions/home-page.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockHomeFacadeService;

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
    mockHomeFacadeService = jasmine.createSpyObj('mockHomeFacadeService', {
      dispatch: () => {},
      getHomePageState: of(mockHomePageState),
      getUserLocation: of(mockLocation),
      getStats: of(mockData)
    });

    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: HomeFacadeService, useValue: mockHomeFacadeService },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
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
