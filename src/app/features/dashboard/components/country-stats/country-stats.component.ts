import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CountryStat } from '../../models/country-stat';

@Component({
  selector: 'cv-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryStatsComponent implements OnInit {

  @Input() stats: CountryStat[];

  constructor() { }

  ngOnInit() {
  }

}
