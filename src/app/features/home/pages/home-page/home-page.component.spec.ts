import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { of } from 'rxjs';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomeService } from '../../services/home.service';
import { HomePageState } from '../../store/models/home-module-state.model';
import { HomeDataStats } from '../../models/country-stat';

fdescribe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let mockHomeFacadeService;
  let mockHomeService;

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

  beforeEach(async(() => {
    mockHomeFacadeService = jasmine.createSpyObj('mockHomeFacadeService', {
      dispatch: () => {},
      getData: of(mockData),
      getHomePageState: of(mockHomePageState),
      getUserLocation: of('')
    });

    mockHomeService = jasmine.createSpyObj('mockHomeService', {
      getLocation: of(undefined)
    });


    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: HomeFacadeService, useValue: mockHomeFacadeService },
        { provide: HomeService, useValue: mockHomeService },
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
});
