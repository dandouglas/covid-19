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
  value: any;

  @Input()
  country?: string;

  formattedVal: any;

  constructor() { }

  ngOnInit() {
    if (typeof this.value === 'number') {
      this.formattedVal = this.value ? this.value.toLocaleString() : '';
    } else {
      this.formattedVal = this.value;
    }
  }

}
