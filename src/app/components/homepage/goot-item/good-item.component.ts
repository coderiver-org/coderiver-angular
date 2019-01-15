import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-good-item',
  templateUrl: './good-item.component.html',
  styleUrls: ['./good-item.component.less']
})
export class GoodItemComponent {
  @Input() dataSource: Array<object> = [];
}
