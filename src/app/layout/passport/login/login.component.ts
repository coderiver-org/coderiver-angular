import { Component, Input } from '@angular/core';

@Component({
  selector: 'layout-passport-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LayoutPassportLoginComponent {
  @Input() public username: String = '';
  @Input() public password: String = '';

  public isPwdShow: Boolean = false;

  constructor() {}
}
