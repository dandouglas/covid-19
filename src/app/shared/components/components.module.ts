import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatDetailsComponent } from './stat-details/stat-details.component';
import { StatTableComponent } from './stat-table/stat-table.component';
import { NbTreeGridModule, NbCardModule } from '@nebular/theme';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    StatDetailsComponent,
    StatTableComponent
  ],
  imports: [
    CommonModule,
    NbTreeGridModule,
    NbCardModule,
    PipesModule,
  ],
  exports: [
    StatDetailsComponent,
    StatTableComponent,
  ]
})
export class ComponentsModule { }
