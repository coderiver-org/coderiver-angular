import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'page-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  @HostBinding('style.display') dis = 'block';
  goodProgrammers: Array<object> = [
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce:
        '前端工程师前端工程师前端工程师前端工程师前端工程师前端工程师' +
        '前端工程师前端工程师前端工程师前端工程师前端工程师前端工程师前端工程师' +
        '前端工程师前端工程师前端工程师前端工程师前端工程师前端工程师'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    }
  ];
  goodDesigners: Array<object> = [
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    },
    {
      name: '张三',
      roleId: 2,
      roleName: '前端工程师',
      avatar: 'string',
      introduce: 'string'
    }
  ];

  toMoreProgrammer = () => {};

  toMoreDesigner = () => {};
}
