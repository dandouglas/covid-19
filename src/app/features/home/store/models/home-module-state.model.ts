import { CountryStat, UserLocation } from '../../models/stat.models';

export interface HomeState {
    stats: CountryStat[];
    homePageState: HomePageState;
    userLocation: string;
}

export interface HomePageState {
    initialising: boolean;
    searchTerm: string;
}
