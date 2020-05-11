interface CaseStats {
  new: string;
  active: number;
  critical: number;
  recovered: number;
  total: number;
}

interface DeathStats {
  new: string;
  total: number;
}

export interface CountryStat {
  country: string;
  cases: CaseStats;
  deaths: DeathStats;
  day: string;
  time: string;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
}

export interface HomeDataStats {
  total: CountryStat;
  tableData: any[];
  highestDeaths: CountryStat;
  highestCases: CountryStat;
}
