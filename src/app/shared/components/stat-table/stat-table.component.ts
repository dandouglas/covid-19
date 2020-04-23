import { Component, OnInit, Input } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbSortDirection, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'cv-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss']
})
export class StatTableComponent implements OnInit {

  @Input() data: TreeNode<FSEntry>[];

  customColumn = 'country';
  defaultColumns = ['totalCases', 'newCases', 'totalDeaths', 'newDeaths', 'critical', 'recovered'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
  }


  ngOnInit() {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

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

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  country: string;
  totalCases: string;
  newCases: string;
  totalDeaths: string;
  newDeaths: string;
  critical: string;
  recovered: string;
}
