import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassportComponent } from './passport.component';

const routes: Routes = [
  {
    path: '',
    component: PassportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassportRoutingModule {}

export const routedComponents = [PassportComponent];
