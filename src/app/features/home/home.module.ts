import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AngularMaterialModule } from '../../angular-material-module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class HomeModule { }
