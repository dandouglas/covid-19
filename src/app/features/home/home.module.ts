import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularMaterialModule } from '../../angular-material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardModule } from '../dashboard/dashboard.module';

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
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
