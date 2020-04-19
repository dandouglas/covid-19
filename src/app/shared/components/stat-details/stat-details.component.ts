import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-stat-details',
  templateUrl: './stat-details.component.html',
  styleUrls: ['./stat-details.component.scss']
})
export class StatDetailsComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
