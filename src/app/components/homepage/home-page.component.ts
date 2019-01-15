import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'page-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  @HostBinding('style.display') dis = 'block';
}
