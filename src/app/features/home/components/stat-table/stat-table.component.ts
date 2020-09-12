import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { NbTreeGridDataSource, NbSortDirection, NbSortRequest } from '@nebular/theme';
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
  @Output() changeSort = new EventEmitter<NbSortRequest>();

  sortColumn = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  onChangeSort(sortRequest: NbSortRequest): void {
    this.changeSort.emit(sortRequest);
  }

  getDirection(column: string): NbSortDirection {
    if (column === this.sortColumn) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

}
