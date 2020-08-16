import { CountryStat, CaseStats, DeathStats } from '../app/features/home/models/country-stat';
import * as faker from 'faker';


const mockCaseStats: CaseStats = {
  new: faker.random.number().toString(),
  active: faker.random.number(),
  critical: faker.random.number(),
  recovered: faker.random.number(),
  total: faker.random.number(),
};

const mockDeathStats: DeathStats = {
  new: faker.random.number().toString(),
  total: faker.random.number(),
};

export function countryStatGenerator(override?: Partial<CountryStat>): CountryStat {
  const countryStat: CountryStat = {
    country: faker.address.country(),
    cases: mockCaseStats,
    deaths: mockDeathStats,
    day: faker.date.recent().toString(),
    time: faker.date.recent().getTime().toString()
  };

  return Object.assign(countryStat, override);
}
