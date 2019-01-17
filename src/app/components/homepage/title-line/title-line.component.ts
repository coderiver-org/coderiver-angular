import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title-line',
  templateUrl: './title-line.component.html',
  styleUrls: ['./title-line.component.less']
})
export class TitleLineComponent {
  @Input() title = '';
  @Input() color = '#40aea8';
  @Input() action = '查看更多';
  @Input() clickFunc: Function = () => {};
}
