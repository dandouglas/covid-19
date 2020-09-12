import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatTableContainerComponent } from './stat-table-container.component';
import { MockTableData } from '../../../../../testing/mock-table-data';
import { NbSortDirection, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { FSEntry, TreeNode } from '../../models/stat.models';

describe('StatTableContainerComponent', () => {
  let component: StatTableContainerComponent;
  let fixture: ComponentFixture<StatTableContainerComponent>;

  let mockDataSourceBuilder;

  const mockTableData = MockTableData as unknown as TreeNode<FSEntry>[];

  const mockColumn = 'testColumn';
  const mockDirection = NbSortDirection.ASCENDING;

  const mockNbSortRequest = {
    column: 'testColumn',
    direction: mockDirection
  };

  beforeEach(async(() => {
    mockDataSourceBuilder = jasmine.createSpyObj('mockDataSourceBuilder', {
      create: {
        sort: jasmine.createSpy('sort')
      }
    });

    TestBed.configureTestingModule({
      declarations: [ StatTableContainerComponent ],
      providers: [
        { provide: NbTreeGridDataSourceBuilder, useValue: mockDataSourceBuilder }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data = mockTableData;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialise the data source', () => {
      expect(mockDataSourceBuilder.create).toHaveBeenCalledWith(mockTableData);
    });
  });

  describe('changeSort', () => {

    beforeEach(() => {
      component.changeSort(mockNbSortRequest);
    });

    it('should sort the data', () => {
      expect(component.dataSource.sort).toHaveBeenCalledWith(mockNbSortRequest);
    });

    it('should set the sort column correctly', () => {
      expect(component.sortColumn).toEqual(mockNbSortRequest.column);
    });

    it('should set the sortDirection property correctly', () => {
      expect(component.sortDirection).toBe(mockNbSortRequest.direction);
    });
  });

  describe('getDirection', () => {

    beforeEach(() => {
      component.changeSort(mockNbSortRequest);
    });

    it('should return the correct sort direction', () => {
      const res = component.getDirection(mockColumn);
      expect(res).toEqual(mockDirection);
    });

    it('should return NbSortDirection.NONE', () => {
      const res = component.getDirection('abc');
      expect(res).toEqual(NbSortDirection.NONE);
    });
  });
});
