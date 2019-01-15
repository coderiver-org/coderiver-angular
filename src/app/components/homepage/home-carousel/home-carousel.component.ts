import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.less']
})
export class HomeCarouselComponent {
  @HostBinding('class.carousel') car = true;

  constructor(private router: Router) {}

  @Input() carousels: Array<object> = [
    {
      path: '',
      url:
        'http://img17.3lian.com/d/file/201702/20/d5d692b492df805ad8a4cb61fd1c73d3.jpg'
    },
    {
      path: '',
      url:
        'http://img17.3lian.com/d/file/201702/20/7d3079c4ca0d11a0126116100d1ca3dd.jpg'
    },
    {
      path: '',
      url:
        'http://img17.3lian.com/d/file/201702/20/ec4acb80b76b3e84fe58f48b558908d3.jpg'
    },
    {
      path: '',
      url:
        'http://img17.3lian.com/d/file/201702/20/a7c84a0702d14a073f76dda56f71dec0.jpg'
    }
  ];

  create = () => {};

  joinGroup = () => {};
}
