import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularMaterialModule } from '../../angular-material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbCardModule, NbSpinnerModule, NbTreeGridModule } from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeStoreModule } from './store/home-store.module';
import { StatDetailsComponent } from './components/stat-details/stat-details.component';
import { StatTableComponent } from './components/stat-table/stat-table.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomePageComponent,
    StatDetailsComponent,
    StatTableComponent,
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    HttpClientModule,
    NgxEchartsModule,
    NbCardModule,
    NbSpinnerModule,
    FlexLayoutModule,
    SharedModule,
    NbEvaIconsModule,
    HomeStoreModule,
    NbTreeGridModule,
    PipesModule,
    FontAwesomeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
