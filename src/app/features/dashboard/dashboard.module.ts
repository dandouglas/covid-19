import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryStatsComponent } from './components/country-stats/country-stats.component';
import { AngularMaterialModule } from '../../angular-material-module';

@NgModule({
  declarations: [
    CountryStatsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    CountryStatsComponent,
  ]
})
export class DashboardModule { }
