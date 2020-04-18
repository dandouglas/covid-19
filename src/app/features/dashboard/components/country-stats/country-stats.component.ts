import { Component, OnInit, Input } from '@angular/core';
import { CountryStat } from '../../models/country-stat';

@Component({
  selector: 'cv-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit {

  @Input() stats: CountryStat[];

  constructor() { }

  ngOnInit() {
  }

}
