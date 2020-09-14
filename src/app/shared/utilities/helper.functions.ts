import { CountryStat } from '../../features/home/models/stat.models';

export function findAll(stat: CountryStat): boolean {
  return stat.country === 'All';
}

/*
* Removes all the stats for places that aren't countries
*/
export function nonCountryFilter(stat: CountryStat): boolean {
  return stat.country !== 'All' && stat.country !== 'Europe' && stat.country !== 'North-America'
    && stat.country !== 'Asia' && stat.country !== 'Diamond-Princess-';
}

/*
* Takes a string with a + symbol at the beginning followed by a number (eg "+123")
* and returns the number value
*/
export function parseNewValues(val: string): number {
  return parseInt(val.replace('+', ''), 10);
}

export function tableDataMap(stat: CountryStat): any {
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
