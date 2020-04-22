import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbTreeGridModule, NbCardModule } from '@nebular/theme';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    NbCardModule,
    PipesModule,
    ComponentsModule,
  ],
})
export class SharedModule { }
