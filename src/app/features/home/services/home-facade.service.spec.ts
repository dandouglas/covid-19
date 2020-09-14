import { TestBed } from '@angular/core/testing';
import { HomeFacadeService } from './home-facade.service';
import { Store } from '@ngrx/store';
import { HomeService } from './home.service';
import { cold } from 'jasmine-marbles';

describe('HomeFacadeService', () => {

  let mockStore;
  let mockHomeService;
  let mockSelectResult;

  beforeEach(() => {
    mockStore = jasmine.createSpyObj('mockStore', ['select', 'dispatch']);
    mockSelectResult = cold('-a-');
    mockStore.select.and.returnValue(mockSelectResult);
    mockHomeService = jasmine.createSpyObj('mockHomeService', {
      findAll: [],
      nonCountryFilter: [],
      tableDataMap: []
    });
  });

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: Store, useValue: mockStore },
      { provide: HomeService, useValue: mockHomeService }
    ]
  }));

  it('should be created', () => {
    const service: HomeFacadeService = TestBed.inject(HomeFacadeService);
    expect(service).toBeTruthy();
  });

  describe('getStats', () => {
    it('should get the table data from the store', () => {
      mockStore.select.calls.reset();
      const service: HomeFacadeService = TestBed.inject(HomeFacadeService);

      expect(service.getStats()).toBeObservable(mockSelectResult);
    });
  });

  describe('getHomePageState', () => {
    it('should get the home page state from the store', () => {
      mockStore.select.calls.reset();
      const service: HomeFacadeService = TestBed.inject(HomeFacadeService);

      expect(service.getHomePageState()).toBeObservable(mockSelectResult);
    });
  });

  describe('getUserLocation', () => {
    it('should get the home page state from the store', () => {
      mockStore.select.calls.reset();
      const service: HomeFacadeService = TestBed.inject(HomeFacadeService);

      expect(service.getUserLocation()).toBeObservable(mockSelectResult);
    });
  });

  describe('dispatch', () => {
    it('should dispatch the correct store action', () => {
      const service: HomeFacadeService = TestBed.inject(HomeFacadeService);
      const mockAction = { type: 'mock-action' };
      service.dispatch(mockAction);
      expect(mockStore.dispatch).toHaveBeenCalledWith(mockAction);
    });
  });

});
