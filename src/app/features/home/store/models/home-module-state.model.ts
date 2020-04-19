import { CountryStat } from '../../../dashboard/models/country-stat';

export interface HomeState {
    stats: CountryStat[];
}

export interface HomePageState {
    initialising: boolean;
    searchTerm: string;
}
