import { CountryStat } from '../../models/country-stat';

export interface HomeState {
    stats: CountryStat[];
    homePageState: HomePageState;
}

export interface HomePageState {
    initialising: boolean;
    searchTerm: string;
}
