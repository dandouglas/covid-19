import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cv-stat-details',
  templateUrl: './stat-details.component.html',
  styleUrls: ['./stat-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatDetailsComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  value: number;
  formattedVal: string;

  constructor() { }

  ngOnInit() {
    this.formattedVal = this.value ? this.value.toLocaleString() : '';
  }

}
