import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTableComponent } from './stat-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import * as faker from 'faker';
import { NbSortDirection } from '@nebular/theme';

describe('StatTableComponent', () => {
  let component: StatTableComponent;
  let fixture: ComponentFixture<StatTableComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatTableComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChangeSort', () => {
    it('should emit the sort request', () => {
      const mockNbSortRequest = {
        column: faker.random.word(),
        direction: NbSortDirection.ASCENDING
      };
      component.changeSort = jasmine.createSpyObj('changeSort', ['emit']);
      component.onChangeSort(mockNbSortRequest);
      expect(component.changeSort.emit).toHaveBeenCalledWith(mockNbSortRequest);
    });
  });

  describe('onGetDirection', () => {
    it('should emit the column which has been ordered', () => {
      const mockColumn = faker.random.word();
      component.getDirection = jasmine.createSpyObj('getDirection', ['emit']);
      component.onGetDirection(mockColumn);
      expect(component.getDirection.emit).toHaveBeenCalledWith(mockColumn);
    });
  });

});
