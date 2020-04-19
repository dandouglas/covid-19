import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularMaterialModule } from '../../angular-material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NbCardModule } from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    HttpClientModule,
    NgxEchartsModule,
    DashboardModule,
    NbCardModule,
    FlexLayoutModule,
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
