# A23187's Blog
基于 VuePress 搭建的博客、托管于 GitHub Pages、由 Travis CI 提供持续集成服务

## 参考 
[VuePress 快速踩坑](https://zhuanlan.zhihu.com/p/36116211)  
[Travis CI 使用经验](https://segmentfault.com/a/1190000016603414?utm_source=tag-newest#articleHeader2)  
[搭建持续集成、基于 vuepress 的 Github Page](https://zhuanlan.zhihu.com/p/36390666)  

## VuePress
[官方文档](https://vuepress.vuejs.org/zh/guide/)  

## GitHub Pages
[官方文档](https://pages.github.com/)  

## Travis CI
[官方文档](https://docs.travis-ci.com/)  
[持续集成服务 Travis CI 教程 - 阮一峰](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)  

## Valine
[官方文档](https://valine.js.org)  
[valine 评论框样式美化](https://me.idealli.com/post/2d5da13e.html)  

## 备注
1. 为什么选择局部安装 vuepress，是因为全局安装会影响到持续集成服务的引入吗？
> 作为本地依赖安装让你可以使用持续集成工具，或者一些其他服务（比如 Netlify）来帮助你在每次提交代码时自动部署。
2. 能否加快 Travis CI 构建的速度？若能，又如何加快？
3. [`.editorconfig`](.editorconfig) 文件的作用：[EditorConfig](https://editorconfig.org/)  
4. 关于评论插件的选择  

评论插件|特点
--|--
~~[gitment](https://imsun.net/posts/gitment-introduction/)~~|~~基于 GitHub Issue。须登录，且仅支持使用GitHub账号登录~~ (已停止维护)
[gitalk](https://gitalk.github.io/)|基于 GitHub Issue和 Preact 开发。须登录，且仅支持使用 GitHub 账号登录
[Vssue](https://vssue.js.org/zh/)|由 Vue 驱动、基于多个平台的 Issue (GitHub、GitLab、Bitbucket)。须登录，可通过配置设定使用什么账号进行登录
[Valine](https://valine.js.org)|基于 Leancloud、免登录

## TODO
- [ ] 配置博客、添加内容
- [x] 自定义域名
- [ ] 添加评论系统
- [ ] 完善文档

## FIXME
- [x] 修复 Travis CI 时区不正确而导致的最后更新时间不正确的 Bug  
  解决方案：  
  使用 `lsb_release -a` 命令，查看 Travis CI 所使用的 Linux 发行版，结果是 Ubuntu。而 Ubuntu 系统可以使用 `sudo cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime` 命令 (注意，`sudo`权限) 来设置时区为上海时区。所以，先通过命令 `ls /usr/share/zoneinfo/Asia/ | grep Shanghai` 来确定 Travis CI 上是否存在上海时区文件，结果的确存在。而且，在 Travis CI 上使用 `sudo` 命令也并不需要输入密码，那就🆗了。