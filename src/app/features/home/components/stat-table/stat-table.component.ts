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
  @Input() sortColumn: string;
  @Input() sortDirection: NbSortDirection;

  @Output() changeSort = new EventEmitter<NbSortRequest>();
  @Output() getDirection = new EventEmitter<string>();

  onChangeSort(sortRequest: NbSortRequest): void {
    this.changeSort.emit(sortRequest);
  }

  onGetDirection(column: string): void {
    this.getDirection.emit(column);
  }

}
