import { NgModule } from '@angular/core';
import { HomeRoutingModule, routedComponents } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [HomeRoutingModule, NgZorroAntdModule],
  declarations: [...routedComponents]
})
export class HomeModule {}
