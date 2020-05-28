import { TestBed } from '@angular/core/testing';
import { HomeFacadeService } from './home-facade.service';

describe('HomeFacade.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeFacadeService = TestBed.get(HomeFacadeService);
    expect(service).toBeTruthy();
  });
});
