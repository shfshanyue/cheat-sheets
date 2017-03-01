
<h1>Git Cheat Sheet</h1><a href="//shfshanyue.github.io/cheat-sheets/git">查看卡片式效果</a><br/>
<ul>
  <li><a href="#0-0">初始化仓库</a></li>
  <li><a href="#0-1">初始化裸仓库</a></li>
  <li><a href="#0-2">克隆仓库</a></li>
  <li><a href="#1-0">编辑配置文件</a></li>
  <li><a href="#1-1">列出配置信息</a></li>
  <li><a href="#1-2">获取相应的配置</a></li>
  <li><a href="#1-3">输出彩色信息</a></li>
  <li><a href="#1-4">设置文件名大小写敏感</a></li>
  <li><a href="#1-5">设置推送策略为 simple</a></li>
  <li><a href="#1-6">设置 git 的编辑器是 vim</a></li>
  <li><a href="#1-7">设置命令别名</a></li>
  <li><a href="#2-0">添加所有文件到暂存区，包括未追踪文件</a></li>
  <li><a href="#2-1">更新暂存区文件</a></li>
  <li><a href="#2-2">交互式添加文件到暂存区</a></li>
  <li><a href="#2-3">工作区与暂存区删除文件</a></li>
  <li><a href="#2-4">仅暂存区删除文件</a></li>
  <li><a href="#2-5">重命名暂存区文件</a></li>
  <li><a href="#3-0">显示工作区与暂存区的不同</a></li>
  <li><a href="#3-1">显示暂存区与本地仓库的不同</a></li>
  <li><a href="#3-2">显示工作区，暂存区与本地仓库的不同</a></li>
  <li><a href="#3-3">仅显示改变的文件</a></li>
  <li><a href="#3-4">比较两次提交的差异</a></li>
  <li><a href="#3-5">显示某次 commit 所做的更改</a></li>
  <li><a href="#4-0">列出本地分支</a></li>
  <li><a href="#4-1">列出本地分支与追踪关系</a></li>
  <li><a href="#4-2">列出远程分支</a></li>
  <li><a href="#4-3">列出所有分支</a></li>
  <li><a href="#4-4">建立分支不切换工作区</a></li>
  <li><a href="#4-5">删除已被合并的分支</a></li>
  <li><a href="#4-6">强制删除未被合并的分支</a></li>
  <li><a href="#4-7">更改分支名字</a></li>
  <li><a href="#4-8">设置追踪分支</a></li>
  <li><a href="#5-0">切换分支</a></li>
  <li><a href="#5-1">建立分支并切换工作区</a></li>
  <li><a href="#5-2">切换到最近一次分支</a></li>
  <li><a href="#5-3">建立无任何提交历史的分支</a></li>
  <li><a href="#6-0">合并 develop 分支到本分支</a></li>
  <li><a href="#6-1">强制合并分支后生成 merge commit</a></li>
  <li><a href="#6-2">变基合并 develop 分支</a></li>
  <li><a href="#6-3">变基进入交互式界面</a></li>
  <li><a href="#7-0">重置工作区某文件</a></li>
  <li><a href="#7-1">重置工作区</a></li>
  <li><a href="#7-2">列出将要清除的未追踪文件</a></li>
  <li><a href="#7-3">清除未追踪文件</a></li>
  <li><a href="#7-4">清除忽略文件</a></li>
  <li><a href="#7-5">清除未追踪目录及文件</a></li>
  <li><a href="#8-0">重置暂存区</a></li>
  <li><a href="#8-1">重置工作区和暂存区</a></li>
  <li><a href="#8-2">恢复本分支到某次提交，重置工作区与暂存区</a></li>
  <li><a href="#8-3">恢复本分支到某次提交</a></li>
  <li><a href="#8-4">恢复本分支到某次提交，重置暂存区</a></li>
  <li><a href="#8-5">反向恢复一个提交并生成新的提交</a></li>
  <li><a href="#9-0">储藏(stash)工作区相对暂存区更改的文件</a></li>
  <li><a href="#9-1">储藏文件并添加描述信息</a></li>
  <li><a href="#9-2">恢复最后一次储藏的文件</a></li>
  <li><a href="#9-3">恢复最后一次储藏的文件并删除此次储存记录</a></li>
  <li><a href="#9-4">查看储藏列表</a></li>
  <li><a href="#10-0">查看工作区的信息</a></li>
  <li><a href="#10-1">查看工作区信息并显示分支及追踪信息</a></li>
  <li><a href="#10-2">并查看忽略文件的信息</a></li>
  <li><a href="#10-3">列出忽略文件</a></li>
  <li><a href="#11-0">添加远程仓库并命名为 origin</a></li>
  <li><a href="#11-1">修改远程仓库的地址</a></li>
  <li><a href="#11-2">列出所有的远程仓库</a></li>
  <li><a href="#11-3">列出远程仓库 origin 的详细信息</a></li>
  <li><a href="#12-0">git config push.default simple</a></li>
  <li><a href="#12-1">推送 master 到远程仓库</a></li>
  <li><a href="#12-2">推送到远程仓库并建立追踪关系</a></li>
  <li><a href="#12-3">推送时忽略 pre-push hook</a></li>
  <li><a href="#12-4">从远程仓库拉取文件</a></li>
  <li><a href="#12-5">设置 rebase 模式拉取代码</a></li>
  <li><a href="#13-0">提交</a></li>
  <li><a href="#13-1">追加提交重置提交信息</a></li>
  <li><a href="#13-2">重置作者</a></li>
  <li><a href="#13-3">允许空提交</a></li>
  <li><a href="#13-4">提交时跳过 pre-commit hook</a></li>
  <li><a href="#14-0">显示提交日志</a></li>
  <li><a href="#14-1">显示某文件的提交日志</a></li>
  <li><a href="#14-2">以图表形式显示提交日志</a></li>
  <li><a href="#14-3">显示每次提交的对象信息</a></li>
  <li><a href="#14-4">显示某个时间段的提交信息</a></li>
  <li><a href="#14-5">显示指定作者的提交信息</a></li>
  <li><a href="#14-6">根据提交信息中的关键字查找</a></li>
  <li><a href="#14-7">列出二者特有的提交</a></li>
  <li><a href="#14-8">列出 branch 有而 branch2 没有的提交</a></li>
  <li><a href="#14-9">仅显示 merge commit</a></li>
  <li><a href="#14-10">统计每个作者的提交情况</a></li>
  <li><a href="#14-11">统计每个作者的提交个数</a></li>
  <li><a href="#15-0">列出所有标签并显示标签信息</a></li>
  <li><a href="#15-1">添加一个标签</a></li>
  <li><a href="#15-2">在某个 commit 上添加一个标签</a></li>
  <li><a href="#15-3">删除一个标签</a></li>
  <li><a href="#15-4">查看某个标签信息</a></li>
  <li><a href="#15-5">推送所有标签到远程仓库</a></li>
  <li><a href="#15-6">使用最近的标签描述本次提交</a></li>
  <li><a href="#16-0">找到最后一次提交的作者</a></li>
  <li><a href="#16-1">找到具体某一段的最后一次提交</a></li>
  <li><a href="#16-2">查找文件的修改历史及明细</a></li>
  <li><a href="#17-0">二分查找坏的提交</a></li>
  <li><a href="#18-0">列出暂存区文件</a></li>
  <li><a href="#18-1">列出忽略文件与未追踪文件</a></li>
  <li><a href="#18-2">子目录中显示所在位置</a></li>
  <li><a href="#19-0">获取改摘要信息的类型</a></li>
  <li><a href="#19-1">获取改摘要信息的内容</a></li>
  <li><a href="#20-0">在已追踪文件中查找关键字并指明行号</a></li>
  <li><a href="#21-0">打包</a></li>
</ul>
<h2>初始化仓库</h2>
<div id="0-0"></div>
<h3>初始化仓库</h3>
``` sh
git init
```
<div id="0-1"></div>
<h3>初始化裸仓库</h3>
``` sh
git init --bare
```
<div id="0-2"></div>
<h3>克隆仓库</h3>
``` sh
git clone <git-repo>
```
<h2>配置</h2>
<div id="1-0"></div>
<h3>编辑配置文件</h3>
``` sh
git config [--global] -e
```
<div id="1-1"></div>
<h3>列出配置信息</h3>
``` sh
git config -l
```
<div id="1-2"></div>
<h3>获取相应的配置</h3>
``` sh
git config --get core.editor
```
<div id="1-3"></div>
<h3>输出彩色信息</h3>
``` sh
git config color.ui true
```
<div id="1-4"></div>
<h3>设置文件名大小写敏感</h3>
``` sh
git config core.ignoreCase false
```
<div id="1-5"></div>
<h3>设置推送策略为 simple</h3>
``` sh
git config push.default simple
```
<div id="1-6"></div>
<h3>设置 git 的编辑器是 vim</h3>
``` sh
git config --global core.editor vim
```
<div id="1-7"></div>
<h3>设置命令别名</h3>
``` sh
git config --global alias.co checkout
```
<h2>操作暂存区文件</h2>
<div id="2-0"></div>
<h3>添加所有文件到暂存区，包括未追踪文件</h3>
``` sh
git add -A
```
<div id="2-1"></div>
<h3>更新暂存区文件</h3>
``` sh
git add -u
```
<div id="2-2"></div>
<h3>交互式添加文件到暂存区</h3>
``` sh
git add -p
```
<div id="2-3"></div>
<h3>工作区与暂存区删除文件</h3>
``` sh
git rm <file>
```
<div id="2-4"></div>
<h3>仅暂存区删除文件</h3>
``` sh
git rm --cached <file>
```
<div id="2-5"></div>
<h3>重命名暂存区文件</h3>
``` sh
git mv <file> <file1>
```
<h2>显示更改</h2>
<div id="3-0"></div>
<h3>显示工作区与暂存区的不同</h3>
``` sh
git diff
```
<div id="3-1"></div>
<h3>显示暂存区与本地仓库的不同</h3>
``` sh
git diff --cached
```
<div id="3-2"></div>
<h3>显示工作区，暂存区与本地仓库的不同</h3>
``` sh
git diff HEAD
```
<div id="3-3"></div>
<h3>仅显示改变的文件</h3>
``` sh
git diff --name-only
```
<div id="3-4"></div>
<h3>比较两次提交的差异</h3>
``` sh
git diff <commit> <commit>
```
<div id="3-5"></div>
<h3>显示某次 commit 所做的更改</h3>
``` sh
git show <commit>
```
<h2>分支</h2>
<div id="4-0"></div>
<h3>列出本地分支</h3>
``` sh
git branch
```
<div id="4-1"></div>
<h3>列出本地分支与追踪关系</h3>
``` sh
git branch -vv
```
<div id="4-2"></div>
<h3>列出远程分支</h3>
``` sh
git branch -r
```
<div id="4-3"></div>
<h3>列出所有分支</h3>
``` sh
git branch -a
```
<div id="4-4"></div>
<h3>建立分支不切换工作区</h3>
``` sh
git branch <branch>
```
<div id="4-5"></div>
<h3>删除已被合并的分支</h3>
``` sh
git branch -d <branch>
```
<div id="4-6"></div>
<h3>强制删除未被合并的分支</h3>
``` sh
git branch -D <branch>
```
<div id="4-7"></div>
<h3>更改分支名字</h3>
``` sh
git branch -m <newbranch>
```
<div id="4-8"></div>
<h3>设置追踪分支</h3>
``` sh
git branch -u <upstream>
```
<h2>切换分支</h2>
<div id="5-0"></div>
<h3>切换分支</h3>
``` sh
git checkout <branch>
```
<div id="5-1"></div>
<h3>建立分支并切换工作区</h3>
``` sh
git checkout -b <branch>
```
<div id="5-2"></div>
<h3>切换到最近一次分支</h3>
``` sh
git checkout -
```
<div id="5-3"></div>
<h3>建立无任何提交历史的分支</h3>
``` sh
git checkout --orphan <branch>
```
<h2>合并分支</h2>
<div id="6-0"></div>
<h3>合并 develop 分支到本分支</h3>
``` sh
git merge develop
```
<div id="6-1"></div>
<h3>强制合并分支后生成 merge commit</h3>
``` sh
git merge -no-ff develop
```
<div id="6-2"></div>
<h3>变基合并 develop 分支</h3>
``` sh
git rebase develop
```
<div id="6-3"></div>
<h3>变基进入交互式界面</h3>
``` sh
git rebase -i
```
<h2>重置工作区</h2>
<div id="7-0"></div>
<h3>重置工作区某文件</h3>
``` sh
git checkout -- <file>
```
<div id="7-1"></div>
<h3>重置工作区</h3>
``` sh
git checkout .
```
<div id="7-2"></div>
<h3>列出将要清除的未追踪文件</h3>
``` sh
git clean -n
```
<div id="7-3"></div>
<h3>清除未追踪文件</h3>
``` sh
git clean -f
```
<div id="7-4"></div>
<h3>清除忽略文件</h3>
``` sh
git clean -Xf
```
<div id="7-5"></div>
<h3>清除未追踪目录及文件</h3>
``` sh
git clean -df
```
<h2>重置暂存区与仓库</h2>
<div id="8-0"></div>
<h3>重置暂存区</h3>
``` sh
git reset
```
<div id="8-1"></div>
<h3>重置工作区和暂存区</h3>
``` sh
git reset --hard
```
<div id="8-2"></div>
<h3>恢复本分支到某次提交，重置工作区与暂存区</h3>
``` sh
git reset --hard <commit-ish>
```
<div id="8-3"></div>
<h3>恢复本分支到某次提交</h3>
``` sh
git reset --soft <commit-ish>
```
<div id="8-4"></div>
<h3>恢复本分支到某次提交，重置暂存区</h3>
``` sh
git reset --mixed <commit-ish>
```
<div id="8-5"></div>
<h3>反向恢复一个提交并生成新的提交</h3>
``` sh
git revert <commit>
```
<h2>储藏与恢复</h2>
<div id="9-0"></div>
<h3>储藏(stash)工作区相对暂存区更改的文件</h3>
``` sh
git stash
```
<div id="9-1"></div>
<h3>储藏文件并添加描述信息</h3>
``` sh
git stash save <message>
```
<div id="9-2"></div>
<h3>恢复最后一次储藏的文件</h3>
``` sh
git stash apply
```
<div id="9-3"></div>
<h3>恢复最后一次储藏的文件并删除此次储存记录</h3>
``` sh
git stash pop
```
<div id="9-4"></div>
<h3>查看储藏列表</h3>
``` sh
git stash list
```
<h2>工作区状态</h2>
<div id="10-0"></div>
<h3>查看工作区的信息</h3>
``` sh
git status
```
<div id="10-1"></div>
<h3>查看工作区信息并显示分支及追踪信息</h3>
``` sh
git status -sb
```
<div id="10-2"></div>
<h3>并查看忽略文件的信息</h3>
``` sh
git status --ignored
```
<div id="10-3"></div>
<h3>列出忽略文件</h3>
``` sh
git check-ignore *
```
<h2>远程仓库</h2>
<div id="11-0"></div>
<h3>添加远程仓库并命名为 origin</h3>
``` sh
git remote add origin <git-repo>
```
<div id="11-1"></div>
<h3>修改远程仓库的地址</h3>
``` sh
git remote set-url origin <git-repo>
```
<div id="11-2"></div>
<h3>列出所有的远程仓库</h3>
``` sh
git remote -v
```
<div id="11-3"></div>
<h3>列出远程仓库 origin 的详细信息</h3>
``` sh
git remote show origin
```
<h2>推送与拉取</h2>
<div id="12-0"></div>
<h3>git config push.default simple</h3>
``` sh
设置默认推送策略为 simple
```
<div id="12-1"></div>
<h3>推送 master 到远程仓库</h3>
``` sh
git push origin master
```
<div id="12-2"></div>
<h3>推送到远程仓库并建立追踪关系</h3>
``` sh
git push -u origin master
```
<div id="12-3"></div>
<h3>推送时忽略 pre-push hook</h3>
``` sh
git push -n
```
<div id="12-4"></div>
<h3>从远程仓库拉取文件</h3>
``` sh
git pull origin master
```
<div id="12-5"></div>
<h3>设置 rebase 模式拉取代码</h3>
``` sh
git pull --rebase origin master
```
<h2>提交</h2>
<div id="13-0"></div>
<h3>提交</h3>
``` sh
git commit -m <message>
```
<div id="13-1"></div>
<h3>追加提交重置提交信息</h3>
``` sh
git commit --amend -m <message>
```
<div id="13-2"></div>
<h3>重置作者</h3>
``` sh
git commit --amend --author=<mail> 
```
<div id="13-3"></div>
<h3>允许空提交</h3>
``` sh
git commit --allow-empty
```
<div id="13-4"></div>
<h3>提交时跳过 pre-commit hook</h3>
``` sh
git commit -n
```
<h2>日志</h2>
<div id="14-0"></div>
<h3>显示提交日志</h3>
``` sh
git log
```
<div id="14-1"></div>
<h3>显示某文件的提交日志</h3>
``` sh
git log -p <file>
```
<div id="14-2"></div>
<h3>以图表形式显示提交日志</h3>
``` sh
git log --graph --all --oneline --decorate
```
<div id="14-3"></div>
<h3>显示每次提交的对象信息</h3>
``` sh
git log --pretty=raw
```
<div id="14-4"></div>
<h3>显示某个时间段的提交信息</h3>
``` sh
git log --since '2 days ago'
```
<div id="14-5"></div>
<h3>显示指定作者的提交信息</h3>
``` sh
git log --author=<author>
```
<div id="14-6"></div>
<h3>根据提交信息中的关键字查找</h3>
``` sh
git log --grep=<keyword>
```
<div id="14-7"></div>
<h3>列出二者特有的提交</h3>
``` sh
git log master...develop
```
<div id="14-8"></div>
<h3>列出 branch 有而 branch2 没有的提交</h3>
``` sh
git log branch2..branch
```
<div id="14-9"></div>
<h3>仅显示 merge commit</h3>
``` sh
git log --merges
```
<div id="14-10"></div>
<h3>统计每个作者的提交情况</h3>
``` sh
git shortlog
```
<div id="14-11"></div>
<h3>统计每个作者的提交个数</h3>
``` sh
git shortlog -sn
```
<h2>标签</h2>
<div id="15-0"></div>
<h3>列出所有标签并显示标签信息</h3>
``` sh
git tag -ln
```
<div id="15-1"></div>
<h3>添加一个标签</h3>
``` sh
git tag -a v1.0.0 -m <message>
```
<div id="15-2"></div>
<h3>在某个 commit 上添加一个标签</h3>
``` sh
git tag v0.9.0 <commit>
```
<div id="15-3"></div>
<h3>删除一个标签</h3>
``` sh
git tag -d v1.0.0
```
<div id="15-4"></div>
<h3>查看某个标签信息</h3>
``` sh
git show v1.0.0
```
<div id="15-5"></div>
<h3>推送所有标签到远程仓库</h3>
``` sh
git push --tags
```
<div id="15-6"></div>
<h3>使用最近的标签描述本次提交</h3>
``` sh
git describe
```
<h2>追责（甩锅）</h2>
<div id="16-0"></div>
<h3>找到最后一次提交的作者</h3>
``` sh
git blame <file>
```
<div id="16-1"></div>
<h3>找到具体某一段的最后一次提交</h3>
``` sh
git blame -L 10,18 <file>
```
<div id="16-2"></div>
<h3>查找文件的修改历史及明细</h3>
``` sh
git log -p <file>
```
<h2>确认坏的提交</h2>
<div id="17-0"></div>
<h3>二分查找坏的提交</h3>
``` sh
git bisect start <br> git checkout HEAD~20 <br> git bisect good <br> git bisect bad <br> git bisect reset
```
<h2>暂存区文件</h2>
<div id="18-0"></div>
<h3>列出暂存区文件</h3>
``` sh
git ls-files
```
<div id="18-1"></div>
<h3>列出忽略文件与未追踪文件</h3>
``` sh
git ls-files -o
```
<div id="18-2"></div>
<h3>子目录中显示所在位置</h3>
``` sh
git ls-files --full-name
```
<h2>git 对象</h2>
<div id="19-0"></div>
<h3>获取改摘要信息的类型</h3>
``` sh
git cat-file -t <hash>
```
<div id="19-1"></div>
<h3>获取改摘要信息的内容</h3>
``` sh
git cat-file -p <hash>
```
<h2>查找</h2>
<div id="20-0"></div>
<h3>在已追踪文件中查找关键字并指明行号</h3>
``` sh
git grep -n hello
```
<h2>打包</h2>
<div id="21-0"></div>
<h3>打包</h3>
``` sh
git archive -o arch.zip HEAD
```