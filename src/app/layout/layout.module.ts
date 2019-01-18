import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../material.module';

import { LayoutHomeComponent } from './home/home.component';
import { LayoutHomeHeaderComponent } from './home/header/header.component';
import { LayoutHomeFooterComponent } from './home/footer/footer.component';

import { LayoutPassportComponent } from './passport/passport.component';
import { LayoutPassportLoginComponent } from './passport/login/login.component';
import { LayoutPassportRegisterComponent } from './passport/register/register.component';

const HOME = [LayoutHomeComponent, LayoutHomeHeaderComponent, LayoutHomeFooterComponent];

const PASSPORT = [LayoutPassportComponent, LayoutPassportLoginComponent, LayoutPassportRegisterComponent];

@NgModule({
  imports: [CommonModule, CustomMaterialModule],
  declarations: [...HOME, ...PASSPORT],
  exports: []
})
export class LayoutModule {}
