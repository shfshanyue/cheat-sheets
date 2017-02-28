
<h1 class="subject">Git Cheat Sheet</h1>
<h2>init</h2>
<h4>初始化仓库</h4>
``` sh
git init
```
<h2>config</h2>
<h4>编辑配置文件</h4>
``` sh
git config [--global] -e
```
<h4>列出配置信息</h4>
``` sh
git config -l
```
<h4>获取相应的配置</h4>
``` sh
git config --get core.editor
```
<h4>输出彩色信息</h4>
``` sh
git config color.ui true
```
<h4>设置文件名大小写敏感</h4>
``` sh
git config core.ignoreCase false
```
<h4>设置推送策略为 simple</h4>
``` sh
git config push.default simple
```
<h4>设置 git 的编辑器是 vim</h4>
``` sh
git config --global core.editor vim
```
<h4>设置命令别名</h4>
``` sh
git config --global alias.co checkout
```
<h2>add / rm / mv</h2>
<h4>添加所有文件到暂存区，包括未追踪文件</h4>
``` sh
git add -A
```
<h4>更新暂存区文件</h4>
``` sh
git add -u
```
<h4>交互式添加文件到暂存区</h4>
``` sh
git add -p
```
<h4>工作区与暂存区删除文件</h4>
``` sh
git rm &lt;file&gt;
```
<h4>仅暂存区删除文件</h4>
``` sh
git rm --cached &lt;file&gt;
```
<h4>重命名暂存区文件</h4>
``` sh
git mv &lt;file&gt; &lt;file1&gt;
```
<h2>diff</h2>
<h4>显示工作区与暂存区的不同</h4>
``` sh
git diff
```
<h4>显示暂存区与本地仓库的不同</h4>
``` sh
git diff --cached
```
<h4>显示工作区，暂存区与本地仓库的不同</h4>
``` sh
git diff HEAD
```
<h4>仅显示改变的文件</h4>
``` sh
git diff --name-only
```
<h4>比较两次提交的差异</h4>
``` sh
git diff &lt;commit&gt; &lt;commit&gt;
```
<h4>显示某次 commit 所做的更改</h4>
``` sh
git show &lt;commit&gt;
```
<h2>branch</h2>
<h4>列出本地分支</h4>
``` sh
git branch
```
<h4>列出本地分支与追踪关系</h4>
``` sh
git branch -vv
```
<h4>列出远程分支</h4>
``` sh
git branch -r
```
<h4>列出所有分支</h4>
``` sh
git branch -a
```
<h4>建立分支不切换工作区</h4>
``` sh
git branch &lt;branch&gt;
```
<h4>建立分支并切换工作区</h4>
``` sh
git checkout -b &lt;branch&gt;
```
<h4>切换到最近一次分支</h4>
``` sh
git checkout -
```
<h4>删除已被合并的分支</h4>
``` sh
git branch -d &lt;branch&gt;
```
<h4>强制删除未被合并的分支</h4>
``` sh
git branch -D &lt;branch&gt;
```
<h4>更改分支名字</h4>
``` sh
git branch -m &lt;newbranch&gt;
```
<h4>设置追踪分支</h4>
``` sh
git branch -u &lt;upstream&gt;
```
<h2>merge</h2>
<h4>合并 develop 分支到本分支</h4>
``` sh
git merge develop
```
<h4>强制合并分支后生成 merge commit</h4>
``` sh
git merge -no-ff develop
```
<h4>变基合并 develop 分支</h4>
``` sh
git rebase develop
```
<h2>checkout / clean</h2>
<h4>重置工作区某文件</h4>
``` sh
git checkout -- &lt;file&gt;
```
<h4>重置工作区</h4>
``` sh
git checkout .
```
<h4>列出将要清除的未追踪文件</h4>
``` sh
git clean -n
```
<h4>清除未追踪文件</h4>
``` sh
git clean -f
```
<h4>清除忽略文件</h4>
``` sh
git clean -Xf
```
<h4>清除未追踪目录及文件</h4>
``` sh
git clean -df
```
<h2>reset / revert</h2>
<h4>重置暂存区</h4>
``` sh
git reset
```
<h4>重置工作区和暂存区</h4>
``` sh
git reset --hard
```
<h4>恢复本分支到某次提交，重置工作区与暂存区</h4>
``` sh
git reset --hard &lt;commit-ish&gt;
```
<h4>恢复本分支到某次提交</h4>
``` sh
git reset --soft &lt;commit-ish&gt;
```
<h4>恢复本分支到某次提交，重置暂存区</h4>
``` sh
git reset --mixed &lt;commit-ish&gt;
```
<h4>反向恢复一个提交并生成新的提交</h4>
``` sh
git revert &lt;commit&gt;
```
<h2>stash</h2>
<h4>储藏(stash)工作区相对暂存区更改的文件</h4>
``` sh
git stash
```
<h4>储藏文件并添加描述信息</h4>
``` sh
git stash save &lt;message&gt;
```
<h4>恢复最后一次储藏的文件</h4>
``` sh
git stash apply
```
<h4>恢复最后一次储藏的文件并删除此次储存记录</h4>
``` sh
git stash pop
```
<h4>查看储藏列表</h4>
``` sh
git stash list
```
<h2>status / files</h2>
<h4>查看工作区的信息</h4>
``` sh
git status
```
<h4>查看工作区信息并显示分支及追踪信息</h4>
``` sh
git status -sb
```
<h4>并查看忽略文件的信息</h4>
``` sh
git status --ignored
```
<h4>列出忽略文件</h4>
``` sh
git check-ignore *
```
<h2>remote / push / pull</h2>
<h4>添加远程仓库并命名为 origin</h4>
``` sh
git remote add origin &lt;git-repo&gt;
```
<h4>修改远程仓库的地址</h4>
``` sh
git remote set-url origin &lt;git-repo&gt;
```
<h4>列出所有的远程仓库</h4>
``` sh
git remote -v
```
<h4>列出远程仓库 origin 的详细信息</h4>
``` sh
git remote show origin
```
<h2>push / pull</h2>
<h4>git config push.default simple</h4>
``` sh
设置默认推送策略为 simple
```
<h4>推送 master 到远程仓库</h4>
``` sh
git push origin master
```
<h4>推送到远程仓库并建立追踪关系</h4>
``` sh
git push -u origin master
```
<h4>推送时忽略 pre-push hook</h4>
``` sh
git push -n
```
<h4>从远程仓库拉取文件</h4>
``` sh
git pull origin master
```
<h4>设置 rebase 模式拉取代码</h4>
``` sh
git pull --rebase origin master
```
<h2>commit</h2>
<h4>提交</h4>
``` sh
git commit -m &lt;message&gt;
```
<h4>追加提交重置提交信息</h4>
``` sh
git commit --amend -m &lt;message&gt;
```
<h4>追加提交重置作者</h4>
``` sh
git commit --amend --author=&lt;mail&gt; 
```
<h4>追加提交重置作者</h4>
``` sh
git commit --amend --author=&lt;mail&gt; 
```
<h4>变基进入交互式界面</h4>
``` sh
git rebase -i
```
<h4>允许空提交</h4>
``` sh
git commit --allow-empty
```
<h4>提交时跳过 pre-commit hook</h4>
``` sh
git commit -n
```
<h2>log</h2>
<h4>显示提交日志</h4>
``` sh
git log
```
<h4>显示某文件的提交日志</h4>
``` sh
git log -p &lt;file&gt;
```
<h4>以图表形式显示提交日志</h4>
``` sh
git log --graph --all --oneline --decorate
```
<h4>显示每次提交的对象信息</h4>
``` sh
git log --pretty=raw
```
<h4>显示某个时间段的提交信息</h4>
``` sh
git log --since '2 days ago'
```
<h4>显示指定作者的提交信息</h4>
``` sh
git log --author=&lt;author&gt;
```
<h4>根据提交信息中的关键字查找</h4>
``` sh
git log --grep=&lt;keyword&gt;
```
<h4>列出二者特有的提交</h4>
``` sh
git log master...develop
```
<h4>列出 branch 有而 branch2 没有的提交</h4>
``` sh
git log branch2..branch
```
<h4>仅显示 merge commit</h4>
``` sh
git log --merges
```
<h4>统计每个作者的提交情况</h4>
``` sh
git shortlog
```
<h4>统计每个作者的提交个数</h4>
``` sh
git shortlog -sn
```
<h2>tag</h2>
<h4>列出所有标签并显示标签信息</h4>
``` sh
git tag -ln
```
<h4>添加一个标签</h4>
``` sh
git tag -a v1.0.0 -m &lt;message&gt;
```
<h4>在某个 commit 上添加一个标签</h4>
``` sh
git tag v0.9.0 &lt;commit&gt;
```
<h4>删除一个标签</h4>
``` sh
git tag -d v1.0.0
```
<h4>查看某个标签信息</h4>
``` sh
git show v1.0.0
```
<h4>推送所有标签到远程仓库</h4>
``` sh
git push --tags
```
<h4>使用最近的标签描述本次提交</h4>
``` sh
git describe
```
<h2>files</h2>
<h4>列出暂存区文件</h4>
``` sh
git ls-files
```
<h4>列出忽略文件与未追踪文件</h4>
``` sh
git ls-files -o
```
<h4>子目录中显示所在位置</h4>
``` sh
git ls-files --full-name
```
<h2>object</h2>
<h4>获取改摘要信息的类型</h4>
``` sh
git cat-file -t &lt;hash&gt;
```
<h4>获取改摘要信息的内容</h4>
``` sh
git cat-file -p &lt;hash&gt;
```
<h2>grep</h2>
<h4>在已追踪文件中查找关键字并指明行号</h4>
``` sh
git grep -n hello
```
<h2>archive</h2>
<h4>打包</h4>
``` sh
git archive -o arch.zip HEAD
```