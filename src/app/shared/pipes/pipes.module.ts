import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanisePipe } from './humanise.pipe';

@NgModule({
  declarations: [
    HumanisePipe
  ],
  exports: [
    HumanisePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
