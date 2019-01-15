import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-excellent-project',
  templateUrl: './excellent-project.component.html',
  styleUrls: ['./excellent-project.component.less']
})
export class ExcellentProjectComponent {
  constructor(private router: Router) {}

  @Input() projects: Array<object> = [
    {
      name:
        '项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1项目1',
      introduce:
        '第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目第一个项目',
      avatar: '',
      pageView: 10000,
      heatNum: '',
      likeNum: 200
    },
    {
      name: '项目2',
      introduce: '第一个项目',
      avatar: '',
      pageView: 10000,
      heatNum: '',
      likeNum: 200
    },
    {
      name: '项目3',
      introduce: '第一个项目',
      avatar: '',
      pageView: 10000,
      heatNum: '',
      likeNum: 200
    },
    {
      name: '项目4',
      introduce: '第一个项目',
      avatar: '',
      pageView: 10000,
      heatNum: '',
      likeNum: 200
    }
  ];

  toProjectCenter = () => {
    this.router.navigate(['/project-center']);
  };
}
