import { Component } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'layout-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class LayoutHomeComponent {
  title = 'home';

  constructor(breakpointObserver: BreakpointObserver) {}

  activateHandsetLayout(result: BreakpointState): void {
    console.log(result);
  }
}
