import { Injectable } from '@angular/core';
import { CountryStat } from '../models/country-stat';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  nonCountryFilter(stat: CountryStat): boolean {
    return stat.country !== 'All' && stat.country !== 'Europe' && stat.country !== 'North-America'
    && stat.country !== 'Diamond-Princess-';
  }

  tableDataMap(stat: CountryStat): any {
    return {
      data: {
        country: stat.country,
        totalCases: stat.cases.total,
        newCases: stat.cases.new !== null ? parseInt(stat.cases.new.replace('+', ''), 10) : null,
        totalDeaths: stat.deaths.total,
        newDeaths: stat.deaths.new !== null ? parseInt(stat.deaths.new.replace('+', ''), 10) : null,
        critical: stat.cases.critical,
        recovered: stat.cases.active,
      }
    };
  }

  findAll(stat: CountryStat): boolean {
    return stat.country === 'All';
  }
}
