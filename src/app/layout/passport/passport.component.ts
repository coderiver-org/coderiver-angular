import { Component } from '@angular/core';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.scss']
})
export class LayoutPassportComponent {
  public title: String = '欢迎登录CodeRiver';
  public isLogin: Boolean = true;

  constructor() {}

  changeLoginOrRegister() {
    this.isLogin = !this.isLogin;
    this.title = this.isLogin ? '欢迎登录CodeRiver' : '欢迎加入CodeRiver';
  }
}
