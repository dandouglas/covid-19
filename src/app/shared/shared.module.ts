import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTreeGridModule, NbCardModule } from '@nebular/theme';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    NbCardModule,
  ],
})
export class SharedModule { }
