import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { HomePageComponent } from '@components/homepage/home-page.component';
import { ExcellentProjectComponent } from '@components/homepage/excellent-project/excellent-project.component';
import { HomeCarouselComponent } from '@components/homepage/home-carousel/home-carousel.component';
import { TitleLineComponent } from '@components/homepage/title-line/title-line.component';
import { GoodItemComponent } from '@components/homepage/goot-item/good-item.component';

const COMPONENTS = [
  DashboardComponent,
  HomePageComponent,
  ExcellentProjectComponent,
  HomeCarouselComponent,
  GoodItemComponent,
  TitleLineComponent,
  // passport pages
  UserLoginComponent,
  UserRegisterComponent,
  UserRegisterResultComponent,
  // single pages
  CallbackComponent,
  UserLockComponent,
  Exception403Component,
  Exception404Component,
  Exception500Component
];
const COMPONENTS_NOROUNT: any[] = [];

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT
})
export class ComponentsModule {}
