import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortDirection, NbSortRequest } from '@nebular/theme';
import { FSEntry } from '../../models/stat.models';

@Component({
  selector: 'cv-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatTableComponent {

  @Input() dataSource: NbTreeGridDataSource<FSEntry>;
  @Input() allColumns: string[];
  @Input() customColumn: string;
  @Input() defaultColumns: string;

  sortColumn = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  changeSort(sortRequest: NbSortRequest): void {
    this.dataSource.sort(sortRequest);
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

}
