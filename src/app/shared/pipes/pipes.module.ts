import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanisePipe } from './humanise.pipe';
import { LocaleStringPipe } from './locale-string.pipe';

@NgModule({
  declarations: [
    HumanisePipe,
    LocaleStringPipe
  ],
  exports: [
    HumanisePipe,
    LocaleStringPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
