<p align="center">
  <a href="http://www.coderiver.cn">
    <img width="100" src="https://avatars2.githubusercontent.com/u/46118421?s=400&u=428a96d53bb16788f49da9f39c08187755222644&v=4">
  </a>
</p>

<h1 align="center">
CodeRiver
</h1>

<div align="center">

加入优秀的云端团队做一些有趣的事情。

</div>

[English](README-en.md) | 简体中文

## 快速开始

```bash
npm i
ng run start
```
## 技术栈

### Angular

前端框架

### NG-ZORRO

Ant Design 组件库的 Angular 实现，开发和服务于企业级后台产品。

### Ng Alain

基于 NG-ZORRO 的中后台前端解决方案，提供更多通用性业务模块，让开发者更加专注于业务。

### Jest + Protractor

* 单端测试框架Jest
* e2e测试框架Protractor

参考：
* [Angular + Jest + Wallabyjs why it is the ideal combination! And how to configure](https://blog.cloudboost.io/angular-jest-wallabyjs-why-it-is-the-ideal-combination-and-how-to-configure-b4cbe2eff4b3)
* [Angular 6: “ng test” with Jest in 3 minutes](https://codeburst.io/angular-6-ng-test-with-jest-in-3-minutes-b1fe5ed3417c)

### Prettier

代码格式化工具，结合 husky hook 和 lint-staged 会在每次 git 提交代码前自动格式化代码。

### tslint

typescript 代码格式lint工具

### stylelint

css或者css预处理器格式lint工具

### lint-staged

lint-staged 结合 tslint 和 stlyelint 会在 git 提交代码前对代码进行 lint fix。

### codelyzer

专门为 Angular TypeScript 提供的 lint 规则库。


## 代码提交规范

代码提交规范试用Gitflow规范

commit内容形式 分为 fix、feat、doc 三种：

* fix: 用于修复 bug ，例如： fix: remove unused dependcies.
* feat: 用于添加新的功能或特性等，例如： feat: add login page.
* doc: 用于更新文档，例如： doc: update description of project architecture.

## npm 脚本说明

* 本地调试: npm run start
* 打包为静态文件: npm run build
* 单元测试: npm run test
* e2e测试： npm run e2e
* 静态检查： npm run lint
* 热更新方式调试： npm run hmr
* 测试覆盖率: npm run test:coverage

## License

The MIT License (see the [LICENSE](https://github.com/coderiver-org/coderiver-angular/blob/master/LICENSE) file for the full text)
