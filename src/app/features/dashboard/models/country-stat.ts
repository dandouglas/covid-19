interface CaseStats {
  new: number;
  active: number;
  critical: number;
  recovered: number;
  total: number;
}

interface DeathStats {
  new: number;
  total: number;
}

export interface CountryStat {
  country: string;
  cases: CaseStats;
  deaths: DeathStats;
  day: string;
  time: string;
}
