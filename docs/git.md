
<h1>Git Cheat Sheet</h1><a href="//shfshanyue.github.io/cheat-sheets/git">url</a>
<h2>init</h2>
<h3>初始化仓库</h3>
``` sh
git init
```
<h2>config</h2>
<h3>编辑配置文件</h3>
``` sh
git config [--global] -e
```
<h3>列出配置信息</h3>
``` sh
git config -l
```
<h3>获取相应的配置</h3>
``` sh
git config --get core.editor
```
<h3>输出彩色信息</h3>
``` sh
git config color.ui true
```
<h3>设置文件名大小写敏感</h3>
``` sh
git config core.ignoreCase false
```
<h3>设置推送策略为 simple</h3>
``` sh
git config push.default simple
```
<h3>设置 git 的编辑器是 vim</h3>
``` sh
git config --global core.editor vim
```
<h3>设置命令别名</h3>
``` sh
git config --global alias.co checkout
```
<h2>add / rm / mv</h2>
<h3>添加所有文件到暂存区，包括未追踪文件</h3>
``` sh
git add -A
```
<h3>更新暂存区文件</h3>
``` sh
git add -u
```
<h3>交互式添加文件到暂存区</h3>
``` sh
git add -p
```
<h3>工作区与暂存区删除文件</h3>
``` sh
git rm <file>
```
<h3>仅暂存区删除文件</h3>
``` sh
git rm --cached <file>
```
<h3>重命名暂存区文件</h3>
``` sh
git mv <file> <file1>
```
<h2>diff</h2>
<h3>显示工作区与暂存区的不同</h3>
``` sh
git diff
```
<h3>显示暂存区与本地仓库的不同</h3>
``` sh
git diff --cached
```
<h3>显示工作区，暂存区与本地仓库的不同</h3>
``` sh
git diff HEAD
```
<h3>仅显示改变的文件</h3>
``` sh
git diff --name-only
```
<h3>比较两次提交的差异</h3>
``` sh
git diff <commit> <commit>
```
<h3>显示某次 commit 所做的更改</h3>
``` sh
git show <commit>
```
<h2>branch</h2>
<h3>列出本地分支</h3>
``` sh
git branch
```
<h3>列出本地分支与追踪关系</h3>
``` sh
git branch -vv
```
<h3>列出远程分支</h3>
``` sh
git branch -r
```
<h3>列出所有分支</h3>
``` sh
git branch -a
```
<h3>建立分支不切换工作区</h3>
``` sh
git branch <branch>
```
<h3>删除已被合并的分支</h3>
``` sh
git branch -d <branch>
```
<h3>强制删除未被合并的分支</h3>
``` sh
git branch -D <branch>
```
<h3>更改分支名字</h3>
``` sh
git branch -m <newbranch>
```
<h3>设置追踪分支</h3>
``` sh
git branch -u <upstream>
```
<h2>checkout</h2>
<h3>切换分支</h3>
``` sh
git checkout <branch>
```
<h3>建立分支并切换工作区</h3>
``` sh
git checkout -b <branch>
```
<h3>切换到最近一次分支</h3>
``` sh
git checkout -
```
<h3>建立无任何提交历史的分支</h3>
``` sh
git checkout --orphan <branch>
```
<h2>merge</h2>
<h3>合并 develop 分支到本分支</h3>
``` sh
git merge develop
```
<h3>强制合并分支后生成 merge commit</h3>
``` sh
git merge -no-ff develop
```
<h3>变基合并 develop 分支</h3>
``` sh
git rebase develop
```
<h3>变基进入交互式界面</h3>
``` sh
git rebase -i
```
<h2>checkout / clean</h2>
<h3>重置工作区某文件</h3>
``` sh
git checkout -- <file>
```
<h3>重置工作区</h3>
``` sh
git checkout .
```
<h3>列出将要清除的未追踪文件</h3>
``` sh
git clean -n
```
<h3>清除未追踪文件</h3>
``` sh
git clean -f
```
<h3>清除忽略文件</h3>
``` sh
git clean -Xf
```
<h3>清除未追踪目录及文件</h3>
``` sh
git clean -df
```
<h2>reset / revert</h2>
<h3>重置暂存区</h3>
``` sh
git reset
```
<h3>重置工作区和暂存区</h3>
``` sh
git reset --hard
```
<h3>恢复本分支到某次提交，重置工作区与暂存区</h3>
``` sh
git reset --hard <commit-ish>
```
<h3>恢复本分支到某次提交</h3>
``` sh
git reset --soft <commit-ish>
```
<h3>恢复本分支到某次提交，重置暂存区</h3>
``` sh
git reset --mixed <commit-ish>
```
<h3>反向恢复一个提交并生成新的提交</h3>
``` sh
git revert <commit>
```
<h2>stash</h2>
<h3>储藏(stash)工作区相对暂存区更改的文件</h3>
``` sh
git stash
```
<h3>储藏文件并添加描述信息</h3>
``` sh
git stash save <message>
```
<h3>恢复最后一次储藏的文件</h3>
``` sh
git stash apply
```
<h3>恢复最后一次储藏的文件并删除此次储存记录</h3>
``` sh
git stash pop
```
<h3>查看储藏列表</h3>
``` sh
git stash list
```
<h2>status / files</h2>
<h3>查看工作区的信息</h3>
``` sh
git status
```
<h3>查看工作区信息并显示分支及追踪信息</h3>
``` sh
git status -sb
```
<h3>并查看忽略文件的信息</h3>
``` sh
git status --ignored
```
<h3>列出忽略文件</h3>
``` sh
git check-ignore *
```
<h2>commit</h2>
<h3>提交</h3>
``` sh
git commit -m <message>
```
<h3>追加提交重置提交信息</h3>
``` sh
git commit --amend -m <message>
```
<h3>重置作者</h3>
``` sh
git commit --amend --author=<mail> 
```
<h3>允许空提交</h3>
``` sh
git commit --allow-empty
```
<h3>提交时跳过 pre-commit hook</h3>
``` sh
git commit -n
```
<h2>remote</h2>
<h3>添加远程仓库并命名为 origin</h3>
``` sh
git remote add origin <git-repo>
```
<h3>修改远程仓库的地址</h3>
``` sh
git remote set-url origin <git-repo>
```
<h3>列出所有的远程仓库</h3>
``` sh
git remote -v
```
<h3>列出远程仓库 origin 的详细信息</h3>
``` sh
git remote show origin
```
<h2>push / pull</h2>
<h3>git config push.default simple</h3>
``` sh
设置默认推送策略为 simple
```
<h3>推送 master 到远程仓库</h3>
``` sh
git push origin master
```
<h3>推送到远程仓库并建立追踪关系</h3>
``` sh
git push -u origin master
```
<h3>推送时忽略 pre-push hook</h3>
``` sh
git push -n
```
<h3>从远程仓库拉取文件</h3>
``` sh
git pull origin master
```
<h3>设置 rebase 模式拉取代码</h3>
``` sh
git pull --rebase origin master
```
<h2>log</h2>
<h3>显示提交日志</h3>
``` sh
git log
```
<h3>显示某文件的提交日志</h3>
``` sh
git log -p <file>
```
<h3>以图表形式显示提交日志</h3>
``` sh
git log --graph --all --oneline --decorate
```
<h3>显示每次提交的对象信息</h3>
``` sh
git log --pretty=raw
```
<h3>显示某个时间段的提交信息</h3>
``` sh
git log --since '2 days ago'
```
<h3>显示指定作者的提交信息</h3>
``` sh
git log --author=<author>
```
<h3>根据提交信息中的关键字查找</h3>
``` sh
git log --grep=<keyword>
```
<h3>列出二者特有的提交</h3>
``` sh
git log master...develop
```
<h3>列出 branch 有而 branch2 没有的提交</h3>
``` sh
git log branch2..branch
```
<h3>仅显示 merge commit</h3>
``` sh
git log --merges
```
<h3>统计每个作者的提交情况</h3>
``` sh
git shortlog
```
<h3>统计每个作者的提交个数</h3>
``` sh
git shortlog -sn
```
<h2>tag</h2>
<h3>列出所有标签并显示标签信息</h3>
``` sh
git tag -ln
```
<h3>添加一个标签</h3>
``` sh
git tag -a v1.0.0 -m <message>
```
<h3>在某个 commit 上添加一个标签</h3>
``` sh
git tag v0.9.0 <commit>
```
<h3>删除一个标签</h3>
``` sh
git tag -d v1.0.0
```
<h3>查看某个标签信息</h3>
``` sh
git show v1.0.0
```
<h3>推送所有标签到远程仓库</h3>
``` sh
git push --tags
```
<h3>使用最近的标签描述本次提交</h3>
``` sh
git describe
```
<h2>blame</h2>
<h3>找到最后一次提交的作者</h3>
``` sh
git blame <file>
```
<h3>找到具体某一段的最后一次提交</h3>
``` sh
git blame -L 10,18 <file>
```
<h2>bisect</h2>
<h3>二分查找坏的提交</h3>
``` sh
git bisect start <br> git checkout HEAD~20 <br> git bisect good <br> git bisect bad <br> git bisect reset
```
<h2>files</h2>
<h3>列出暂存区文件</h3>
``` sh
git ls-files
```
<h3>列出忽略文件与未追踪文件</h3>
``` sh
git ls-files -o
```
<h3>子目录中显示所在位置</h3>
``` sh
git ls-files --full-name
```
<h2>object</h2>
<h3>获取改摘要信息的类型</h3>
``` sh
git cat-file -t <hash>
```
<h3>获取改摘要信息的内容</h3>
``` sh
git cat-file -p <hash>
```
<h2>grep</h2>
<h3>在已追踪文件中查找关键字并指明行号</h3>
``` sh
git grep -n hello
```
<h2>archive</h2>
<h3>打包</h3>
``` sh
git archive -o arch.zip HEAD
```