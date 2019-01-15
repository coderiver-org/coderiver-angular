import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title-line',
  templateUrl: './title-line.component.html',
  styleUrls: ['./title-line.component.less']
})
export class TitleLineComponent {
  @Input() title: String = '';
  @Input() color: String = '#40aea8';
  @Input() clickFunc: Function = () => {};
}
