import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'page-fast-join',
  templateUrl: './fast-join.component.html',
  styleUrls: ['./fast-join.component.less']
})
export class FastJoinComponent implements AfterViewInit {
  @Input() groups: Array<object> = [
    {
      teamName: '河马1',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    },
    {
      teamName: '河马2',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    },
    {
      teamName: '河马3',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    },
    {
      teamName: '河马4',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    },
    {
      teamName: '河马5',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    },
    {
      teamName: '河马6',
      recruitInfo: '正在招募：UX设计师，UI设计师，前端工程师，全栈工程师...',
      teamAvatar: 'string',
      introduce:
        '加入河马团队，实现更高效的工作合作模式，我们正在招募全栈程序员，UX设计师，前端工程师。',
      founderName: 'Alex Wang',
      founderPosition: '河马团队发起人/创始人',
      founderAvatar: ''
    }
  ];
  currentIndex = 0;
  maxIndex = 0;
  showList: Array<object> = [];

  constructor(private cdr: ChangeDetectorRef) {}

  getMoreGroup = () => {};

  ngAfterViewInit(): void {
    this.afterChange();
  }

  afterChange = () => {
    this.showList = this.groups.slice(
      this.currentIndex * 3,
      this.currentIndex * 3 + 3
    );
    this.maxIndex = Math.ceil(this.groups.length / 3) - 1;
    this.cdr.detectChanges();
  };

  changeIndex = (isAdd: boolean = false) => {
    isAdd ? this.currentIndex++ : this.currentIndex--;
    this.afterChange();
  };
}
