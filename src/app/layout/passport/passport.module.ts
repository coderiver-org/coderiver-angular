import { NgModule } from '@angular/core';
import { PassportRoutingModule, routedComponents } from './passport-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [PassportRoutingModule, NgZorroAntdModule],
  declarations: [...routedComponents]
})
export class PassportModule {}
