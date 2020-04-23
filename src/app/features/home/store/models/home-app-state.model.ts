import { HomeState } from './home-module-state.model';
import { AppState } from '../../../../core/root-store/app-state.model';

export const homeStoreKey = 'home';

export interface HomeAppState extends AppState {
    [homeStoreKey]: HomeState;
}
