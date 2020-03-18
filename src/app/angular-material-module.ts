import { NgModule } from '@angular/core';
import {
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule, MatTreeModule, MatCheckboxModule
} from '@angular/material';

import {MatListModule} from '@angular/material/list';

@NgModule({
  exports: [
    MatIconModule,
    MatInputModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatOptionModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule,
    MatCheckboxModule,
  ],
})
export class AngularMaterialModule {}
