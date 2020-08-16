import { TestBed } from '@angular/core/testing';
import { HomeFacadeService } from './home-facade.service';
import { Store, Action } from '@ngrx/store';
import { HomeService } from './home.service';
import { HomeDataStats } from '../models/stat.models';

describe('HomeFacadeService', () => {

  let mockStore;
  let mockHomeService;

  beforeEach(() => {
    mockStore = jasmine.createSpyObj('mockStore', ['dispatch']);
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


  describe('dispatch', () => {
    it('should dispatch the correct store action', () => {
      const service: HomeFacadeService = TestBed.inject(HomeFacadeService);
      const mockAction = { type: 'mock-action' };
      service.dispatch(mockAction);
      expect(mockStore.dispatch).toHaveBeenCalledWith(mockAction);
    });
  });

  // describe('getData', () => {
  //   it('should return an observable with the correct data', () => {
  //     const mockData: HomeDataStats = {
  //       total: [],
  //       tableData: [],
  //       highestDeaths: {},
  //       highestCases: {}
  //     }
  //   });
  // });
});
