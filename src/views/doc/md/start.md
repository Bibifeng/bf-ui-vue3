# 开始
<h3 style="color: #FF4500;" id="几个存储空间概念">几个存储空间概念</h3>

| 存储空间 | 概念描述 |
| ------- | ------ |
| workspace | idea里写的代码,保存了就是在workspace工作区 |
| index/stage | git add之后会存入stage/index暂存区 |
| repository | git commit之后会存入repository本地仓库 |
| remote | git push 之后会存入remote远程仓库 |

<!--more-->

<h3 style="color: #FF4500;" id="创建新分支（基于远程分支）">创建新分支（基于远程分支）</h3>

> 基于远程release分支新创建自己的release-bibifeng分支

```js
'use strict';
var cheerio = require('cheerio');

// http://stackoverflow.com/questions/14480345/how-to-get-the-nth-occurrence-in-a-string
function getPosition(str, m, i) {
  return str.split(m, i).join(m).length;
}

var version = String(hexo.version).split('.');
hexo.extend.filter.register('after_post_render', function(data){
  var config = hexo.config;
  if(config.post_asset_folder){
        var link = data.permalink;
    if(version.length > 0 && Number(version[0]) == 3)
       var beginPos = getPosition(link, '/', 1) + 1;
    else
       var beginPos = getPosition(link, '/', 3) + 1;
    // In hexo 3.1.1, the permalink of "about" page is like ".../about/index.html".
    var endPos = link.lastIndexOf('/') + 1;
    link = link.substring(beginPos, endPos);

    var toprocess = ['excerpt', 'more', 'content'];
    for(var i = 0; i < toprocess.length; i++){
      var key = toprocess[i];
 
      var $ = cheerio.load(data[key], {
        ignoreWhitespace: false,
        xmlMode: false,
        lowerCaseTags: false,
        decodeEntities: false
      });

      $('img').each(function(){
        if ($(this).attr('src')){
            // For windows style path, we replace '\' to '/'.
            var src = $(this).attr('src').replace('\\', '/');
            if(!/http[s]*.*|\/\/.*/.test(src) &&
               !/^\s*\//.test(src)) {
              // For "about" page, the first part of "src" can't be removed.
              // In addition, to support multi-level local directory.
              var linkArray = link.split('/').filter(function(elem){
                return elem != '';
              });
              var srcArray = src.split('/').filter(function(elem){
                return elem != '' && elem != '.';
              });
              if(srcArray.length > 1)
                srcArray.shift();
              src = srcArray.join('/');
              $(this).attr('src', config.root + link + src);
              console.info&&console.info("update link as:-->"+config.root + link + src);
            }
        }else{
            console.info&&console.info("no src attr, skipped...");
            console.info&&console.info($(this));
        }
      });
      data[key] = $.html();
    }
  }
});
```

<h3 style="color: #FF4500;" id="自己的私人分支merge到公共分支有冲突时">自己的私人分支merge到公共分支有冲突时</h3>

> 以自己分支dev-bibifeng 合并到 dev 分支为例

```
# 1.切换并更新dev分支
git checkout dev
git pull

# 2.合并自己的分支到dev，会生成一条合并记录
git merge --no-ff dev-bibifeng

# 3.如遇冲突先解决，然后add、commit

# 4.推送至远程
git push origin dev
```

<h3 style="color: #FF4500;" id="更新自己的分支以达到与远程分支同步时的操作(rebase方法)">更新自己的分支以达到与远程分支同步时的操作(rebase方法)</h3>

> 更新远程主分支release到自己的分支release-bibifeng为例

场景：这里的release-bibifeng是从release拉下来的，但是同时别人也有他自己的分支（也是从release拉下来的），那么大家都会合代码到release分支，一段时间后，远程的分支代码和自己的分支代码就会有差异了，这时候就要定时把远程release分支更新到自己的分支

```
# 1.检查并获取最新的远程release分支
git fetch origin release

# 2.切换到自己的分支
git checkout release-bibifeng

# 3.同步release到自己的分支（加--no-ff会生成一条更新合并记录，如不需要可去掉）
git pull --no-ff origin release

# 4.如遇冲突先解决，然后add、commit

# 4-1.如需要放弃此次合并，执行abort
git merge --abort

# 5.推送到远程，推送前再pull更新一下，以防在此期间远程代码又有更新
git pull
git push
```

<h3 style="color: #FF4500;" id="代码回退的两种方式">代码回退的两种方式</h3>

> git reset 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了，就可以用这种方法

```
git reset --hard 目标版本号id
git push -f
```

> git revert 撤销某一版本的修改,不影响该版本后的提交版本。只单独撤销某一版本，这种改动实质上是“反做”之前的那条提交记录，并生成一条新的记录重新提交上去。

```
git revert -n xxx版本id
# 若有冲突，先手动解决，然后add、commit、push三刀流
```

<h3 style="color: #FF4500;" id="删除分支（本地、远程）">删除分支（本地、远程）</h3>

```
# 仅查看远程分支
git branch -r

# 查看所有分支
git branch -a

# 删除远程分支
git push origin --delete xxx分支名

# 删除本地分支
git branch -D xxx分支名
```

删除分支时，本地和远程互不影响

<h3 style="color: #FF4500;" id="重命名自己的分支">重命名自己的分支</h3>

```
# 1.删除远程分支（以下均为按需操作）
git push --delete origin release-bibifeng

# 2.重命名本地分支
git branch -m release-bibifeng release-new-name

# 3.将新命名的分支推到远程
git push origin release-new-name

# 4.本地分支关联远程分支
git branch --set-upstream-to=origin/release-new-name
```

<h3 style="color: #FF4500;" id="暂存内容">暂存内容</h3>

```
# 暂存当前改动
git stash

# 查看暂存的内容
git stash show

# 恢复暂存的内容到当前分支
git stash pop
```

<h3 style="color: #FF4500;" id=".ignore忽略已存在远程仓库中的文件">.ignore忽略已存在远程仓库中的文件</h3>

比如需要忽略`package-lock.json`，但是又已经存在远程仓库中

在项目根目录下的`.gitignore`中写入`package-lock.json`

```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
.idea
package-lock.json
```

在项目根目录执行如下命令

```
# 在git中删除package-lock.json
git rm --cached -r package-lock.json

# 提交.gitignore
git add .gitignore
git commit -m '忽略package-lock.json'
git push
```

<h3 style="color: #FF4500;" id="更改当前项目下的git用户名和邮箱">更改当前项目下的git用户名和邮箱</h3>

```
# 进入目录下的git文件夹，该文件夹是隐藏的，但是可直接进入
cd .git

# 查看git配置
vim config

# 按下键盘i进行写入，写入内容见下图

# 写入完毕后，按Esc退出编辑模式

# 保存并退出config文件
:wq
```
![图片替代文字](https://beefrank.gitee.io/git常用命令/changeuser.png)

除了以上vim的方式外，还可以直接找到 /.git/config 打开进行编辑

<h3 style="color: #FF4500;" id="快速打开仓库地址">快速打开仓库地址</h3>

```
# 全局安装git-open
npm i -g git-open

# 在默认浏览器中打开仓库地址
git open
```


