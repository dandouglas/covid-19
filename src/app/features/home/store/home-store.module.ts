import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { homeStoreKey } from './models/home-app-state.model';
import { homeReducer } from './reducers/home.reducer';
import { HomePageEffects } from './effects/home-page.effects';


@NgModule({
    imports: [
        StoreModule.forFeature(homeStoreKey, homeReducer),
        EffectsModule.forFeature([
          HomePageEffects
        ])
    ]
})
export class HomeStoreModule { }
