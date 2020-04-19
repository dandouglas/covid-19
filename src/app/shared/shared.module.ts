import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatDetailsComponent } from './components/stat-details/stat-details.component';

@NgModule({
  declarations: [StatDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatDetailsComponent,
  ]
})
export class SharedModule { }
