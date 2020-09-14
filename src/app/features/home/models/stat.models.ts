export interface CaseStats {
  new: string;
  active: number;
  critical: number;
  recovered: number;
  total: number;
}

export interface DeathStats {
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

export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

export interface FSEntry {
  country: string;
  totalCases: string;
  newCases: string;
  totalDeaths: string;
  newDeaths: string;
  critical: string;
  recovered: string;
}

export interface LocalStats {
  data: {
    country: string,
    totalCases: number,
    newCases: number,
    totalDeaths: number,
    newDeaths: number,
    critical: number,
    recovered: number,
  };
}
