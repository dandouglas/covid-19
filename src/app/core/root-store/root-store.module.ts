import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { metaReducers, appReducers } from './reducers';
import { environment } from '../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

const environmentSpecificImports = [];
if (!environment.production) {
    environmentSpecificImports.push(StoreDevtoolsModule.instrument({}));
}

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers, {
            metaReducers,
            runtimeChecks: {
                // Verifies the immutability of state and actions - this is of critical importance when working with NgRx store.
                strictStateImmutability: true,
                strictActionImmutability: true,
                // Serializability will allow us to persist the store state if we want to at some point but is not completely necessary.
                strictStateSerializability: true,
                strictActionSerializability: true,
            },
        }),
        EffectsModule.forRoot([
          // Effects go here.
        ]),
        ...environmentSpecificImports,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    ],
    declarations: [],
    exports: [],
})
export class RootStoreModule { }
