import { Component, OnInit, Input } from '@angular/core';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

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

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
  }


  ngOnInit() {
    this.dataSource = this.dataSourceBuilder.create(this.data);
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
