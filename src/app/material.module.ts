import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const CONPONENTS = [
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [...CONPONENTS],
  exports: [...CONPONENTS]
})
export class CustomMaterialModule {}
