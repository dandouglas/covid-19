import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeApiService } from './home-api.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryStat } from '../models/country-stat';
import { countryStatGenerator } from '../../../../testing/country-stat-generator';

describe('HomeApiService', () => {
  let mockHttpClient;

  const mockData: CountryStat[] = new Array(Math.floor(Math.random() * 10) + 1)
    .fill(null).map(e => (e = countryStatGenerator()));

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', {
      get: of({ response: mockData })
    });
  });
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpClient, useValue: mockHttpClient }
    ]
  }));

  it('should be created', () => {
    const service: HomeApiService = TestBed.inject(HomeApiService);
    expect(service).toBeTruthy();
  });

  describe('getWorldData', () => {

    it('should call the get method of the http client with the correct args', fakeAsync(() => {
      const service: HomeApiService = TestBed.inject(HomeApiService);
      service.getWorldData();
      tick(500);
      expect(mockHttpClient.get.calls.first().args[0]).toEqual('https://covid-193.p.rapidapi.com/statistics');
    }));

    it('should fetch the stats', async () => {
      const service: HomeApiService = TestBed.inject(HomeApiService);
      const resp = await service.getWorldData().toPromise();
      expect(resp).toEqual(mockData);
    });
  });
});
