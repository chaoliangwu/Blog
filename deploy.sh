#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 设置时区为上海时区，避免文章最后更新时间显示不正确
sudo cp /usr/share/zoneinfo/Asia/Shanghai  /etc/localtime

# 生成静态文件
yarn build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
echo 'www.a23187.cn' > CNAME

git init
git add -A # 等价于 git add --all
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:A-23187/A-23187.github.io.git master
git push -f https://${access_token}@github.com/A-23187/A-23187.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -