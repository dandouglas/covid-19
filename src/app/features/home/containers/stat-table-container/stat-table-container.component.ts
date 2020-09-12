import { Component, Input, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

@Component({
  selector: 'cv-stat-table-container',
  templateUrl: './stat-table-container.component.html',
  styleUrls: ['./stat-table-container.component.scss']
})
export class StatTableContainerComponent implements OnInit {

  @Input() data: TreeNode<FSEntry>[];

  constructor(
    public dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>
  ) { }

  customColumn = 'country';
  defaultColumns = ['totalCases', 'newCases', 'totalDeaths', 'newDeaths', 'critical', 'recovered'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  ngOnInit() {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  // changeSort(sortRequest: NbSortRequest): void {
  //   this.dataSource.sort(sortRequest);
  //   this.sortColumn = sortRequest.column;
  //   this.sortDirection = sortRequest.direction;
  // }

  // getDirection(column: string): NbSortDirection {
  //   if (column === this.sortColumn) {
  //     return this.sortDirection;
  //   }
  //   return NbSortDirection.NONE;
  // }

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
