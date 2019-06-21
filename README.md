# A23187's Blog
基于VuePress搭建的博客、托管于GitHub Pages、由Travis CI提供持续集成服务

## 参考 
[VuePress 快速踩坑](https://zhuanlan.zhihu.com/p/36116211)  
[Travis CI使用经验](https://segmentfault.com/a/1190000016603414?utm_source=tag-newest#articleHeader2)  
[搭建持续集成、基于vuepress的Github Page](https://zhuanlan.zhihu.com/p/36390666)  

## VuePress
[官方文档](https://vuepress.vuejs.org/zh/guide/)  

## GitHub Pages
[官方文档](https://pages.github.com/)  

## Travis CI
[官方文档](https://docs.travis-ci.com/)  
[持续集成服务 Travis CI 教程 - 阮一峰](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)  

## Valine
[官方文档](https://valine.js.org)  
[valine评论框样式美化](https://me.idealli.com/post/2d5da13e.html)  

## 备注
1. 为什么选择局部安装vuepress，是因为全局安装会影响到持续集成服务的引入吗？
> 作为本地依赖安装让你可以使用持续集成工具，或者一些其他服务（比如 Netlify）来帮助你在每次提交代码时自动部署。
2. 能否加快Travis CI构建的速度？若能，又如何加快？
3. [`.editorconfig`](.editorconfig)文件的作用：[EditorConfig](https://editorconfig.org/)  
4. 关于评论插件的选择  

评论插件|特点
--|--
~~[gitment](https://imsun.net/posts/gitment-introduction/)~~|~~基于GitHub Issue。须登录，且仅支持使用GitHub账号登录~~ (已停止维护)
[gitalk](https://gitalk.github.io/)|基于GitHub Issue和Preact开发。须登录，且仅支持使用GitHub账号登录
[Vssue](https://vssue.js.org/zh/)|由Vue驱动、基于多个平台的Issue (GitHub、GitLab、Bitbucket)。须登录，可通过配置设定使用什么账号进行登录
[Valine](https://valine.js.org)|基于Leancloud、免登录

## TODO
- [ ] 配置博客、添加内容
- [ ] 自定义域名
- [ ] 添加评论系统
- [ ] 完善文档

## FIXME
- [ ] 修复Travis CI时区不正确而导致的最后更新时间不正确的Bug