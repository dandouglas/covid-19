import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

@Component({
  selector: 'cv-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss']
})
export class StatTableComponent implements OnInit {

  customColumn = 'country';
  defaultColumns = ['total cases', 'new cases', 'total deaths', 'new deaths', 'critical', 'recovered'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = dataSourceBuilder.create(this.data);
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: {
        country: 'China',
        totalCases: '82719',
        newCases: '4632',
        totalDeaths: '4632',
        newDeaths: '0',
        critical: '85',
        recovered: '77029'
      },
    },
  ];

  ngOnInit() {
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
