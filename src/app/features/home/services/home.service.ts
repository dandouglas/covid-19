import { Injectable } from '@angular/core';
import { CountryStat } from '../../dashboard/models/country-stat';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  nonCountryFilter(stat: CountryStat): boolean {
    return stat.country !== 'All' && stat.country !== 'Europe' && stat.country !== 'North-America';
  }

  tableDataMap(stat: CountryStat): any {
    return {
      data: {
        country: stat.country,
        totalCases: stat.cases.total,
        newCases: stat.cases.new,
        totalDeaths: stat.deaths.total,
        newDeaths: stat.deaths.new,
        critical: stat.cases.critical,
        recovered: stat.cases.active,
      }
    };
  }

  findAll(stat: CountryStat): boolean {
    return stat.country === 'All';
  }
}
