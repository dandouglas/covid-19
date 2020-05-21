import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-stat-today',
  templateUrl: './stat-today.component.html',
  styleUrls: ['./stat-today.component.scss']
})
export class StatTodayComponent implements OnInit {

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
