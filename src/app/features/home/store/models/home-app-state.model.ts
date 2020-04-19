import { HomeState } from './home-module-state.model';
import { AppState } from '../../../../core/root-store/app-state.model';

export const homeStoreKey = 'home';

export interface DocumentsAppState extends AppState {
    [homeStoreKey]: HomeState;
}
