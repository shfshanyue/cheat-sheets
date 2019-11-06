
<h1>Linux Command Cheat Sheet</h1><a href="https://shfshanyue.github.io/cheat-sheets/linux">查看卡片式效果</a><br/>
<h2>目录</h2>
<h4>操作目录</h4>
<ul>
  <li><a href="#0-0">进入最近离开目录</a></li>
  <li><a href="#0-1">打印目录列表，包含隐藏文件</a></li>
  <li><a href="#0-2">递归打印目录信息</a></li>
  <li><a href="#0-3">递归打印目录信息</a></li>
  <li><a href="#0-4">树状结构打印目录信息</a></li>
</ul>
<h4>查看文件内容</h4>
<ul>
  <li><a href="#1-0">查看文件内容</a></li>
  <li><a href="#1-1">查看文件内容，并显示行号</a></li>
  <li><a href="#1-2">查看多个文件，并写入</a></li>
  <li><a href="#1-3">统计文件行数，单词数与字符数</a></li>
</ul>
<h4>快速查看文件内容</h4>
<ul>
  <li><a href="#2-0">分页查看文件内容</a></li>
  <li><a href="#2-1">定位到第十行</a></li>
  <li><a href="#2-2">更加灵活，使用 vi 命令操作页面</a></li>
  <li><a href="#2-3">显示文件前三行</a></li>
  <li><a href="#2-4">显示文件后三行</a></li>
</ul>
<h4>搜索路径</h4>
<ul>
  <li><a href="#3-0">查找文件位置</a></li>
  <li><a href="#3-1">查找文件或文件夹位置</a></li>
  <li><a href="#3-2">查找 js 或者 jsx 结尾的文件或者目录</a></li>
  <li><a href="#3-3">查找属于 user 的文件或者目录</a></li>
  <li><a href="#3-4">只查找文件</a></li>
  <li><a href="#3-5">查看十分钟内修改的文件</a></li>
</ul>
<h4>搜索字符串</h4>
<ul>
  <li><a href="#4-0">在特定文件下查找匹配字符串</a></li>
  <li><a href="#4-1">查找字符串并打印行数</a></li>
  <li><a href="#4-2">在当前目录下查找匹配字符串</a></li>
  <li><a href="#4-3">在当前目录下查找匹配字符串</a></li>
</ul>
<h4>用户信息</h4>
<ul>
  <li><a href="#5-0">打印用户名</a></li>
  <li><a href="#5-1">打印本机的各种 id</a></li>
  <li><a href="#5-2">打印 uid</a></li>
  <li><a href="#5-3">打印主机名</a></li>
  <li><a href="#5-4">更改主机名</a></li>
</ul>
<h4>显示程序位置</h4>
<ul>
  <li><a href="#6-0">打印 python 的执行路径</a></li>
  <li><a href="#6-1">打印 python 的执行路径</a></li>
  <li><a href="#6-2">打印 python 的执行路径</a></li>
</ul>
<h4>显示系统信息</h4>
<ul>
  <li><a href="#7-0">打印系统信息</a></li>
  <li><a href="#7-1">打印文件系统信息</a></li>
  <li><a href="#7-2">打印开机时间</a></li>
</ul>
<h4>显示系统信息</h4>
<ul>
  <li><a href="#8-0">打印系统信息</a></li>
  <li><a href="#8-1">打印文件系统信息</a></li>
  <li><a href="#8-2">打印开机时间以及 CPU 负载情况</a></li>
  <li><a href="#8-3">查看处理器信息</a></li>
</ul>
<h4>排序与去重</h4>
<ul>
  <li><a href="#9-0">顺序打印</a></li>
  <li><a href="#9-1">逆序打印</a></li>
  <li><a href="#9-2">排序后去重</a></li>
</ul>
<h4>链接</h4>
<ul>
  <li><a href="#10-0">创建硬链接, target 最好使用绝对路径</a></li>
  <li><a href="#10-1">创建软链接</a></li>
</ul>
<h4>进程与线程</h4>
<ul>
  <li><a href="#11-0">打印实时进程信息</a></li>
  <li><a href="#11-1">BSD 格式打印所有进程信息</a></li>
  <li><a href="#11-2">标准格式打印所有进程信息</a></li>
  <li><a href="#11-3">打印 root 用户的所有进程信息</a></li>
  <li><a href="#11-4">打印进程树</a></li>
</ul>
<h4>network &amp; socket</h4>
<ul>
  <li><a href="#12-0">测试网络状况</a></li>
  <li><a href="#12-1">network statistic，打印网络连接信息</a></li>
  <li><a href="#12-2">打印所有的 TCP 连接</a></li>
  <li><a href="#12-3">socket statistic, 查看 socket 信息</a></li>
  <li><a href="#12-4">打印统计信息</a></li>
  <li><a href="#12-5">打印所有的 TCP 连接</a></li>
  <li><a href="#12-6">打印特定状态的 TCP 连接</a></li>
</ul>
<h4>curl &amp; wget</h4>
<ul>
  <li><a href="#13-0">从远程获取到内容</a></li>
  <li><a href="#13-1">打印完整http报文</a></li>
  <li><a href="#13-2">下载远程文件到本地</a></li>
  <li><a href="#13-3">只打印响应头</a></li>
  <li><a href="#13-4">整站下载</a></li>
</ul>
<h2>操作目录</h2>
<div id="0-0"></div>
<h4>进入最近离开目录</h4>
``` sh
cd -
```

<div id="0-1"></div>
<h4>打印目录列表，包含隐藏文件</h4>
``` sh
ls -lah
```

<div id="0-2"></div>
<h4>递归打印目录信息</h4>
``` sh
ls -lahR
```

<div id="0-3"></div>
<h4>递归打印目录信息</h4>
``` sh
find .
```

<div id="0-4"></div>
<h4>树状结构打印目录信息</h4>
``` sh
tree
```

<h2>查看文件内容</h2>
<div id="1-0"></div>
<h4>查看文件内容</h4>
``` sh
cat <file>
```

<div id="1-1"></div>
<h4>查看文件内容，并显示行号</h4>
``` sh
cat <file> -n
```

<div id="1-2"></div>
<h4>查看多个文件，并写入</h4>
``` sh
cat <file1> <file2> <file3> > <file>
```

<div id="1-3"></div>
<h4>统计文件行数，单词数与字符数</h4>
``` sh
wc <file>
```

<h2>快速查看文件内容</h2>
<div id="2-0"></div>
<h4>分页查看文件内容</h4>
``` sh
more <file>
```

<div id="2-1"></div>
<h4>定位到第十行</h4>
``` sh
more +10 <file>
```

<div id="2-2"></div>
<h4>更加灵活，使用 vi 命令操作页面</h4>
``` sh
less <file>
```

<div id="2-3"></div>
<h4>显示文件前三行</h4>
``` sh
head -3 <file>
```

<div id="2-4"></div>
<h4>显示文件后三行</h4>
``` sh
tail -3 <file>
```

<h2>搜索路径</h2>
<div id="3-0"></div>
<h4>查找文件位置</h4>
``` sh
find . -name Readme
```

<div id="3-1"></div>
<h4>查找文件或文件夹位置</h4>
``` sh
find . -name '*.js'
```

<div id="3-2"></div>
<h4>查找 js 或者 jsx 结尾的文件或者目录</h4>
``` sh
find . -name '*.js' -o -name '*.jsx'
```

<div id="3-3"></div>
<h4>查找属于 user 的文件或者目录</h4>
``` sh
find . -user <user>
```

<div id="3-4"></div>
<h4>只查找文件</h4>
``` sh
find . -type d
```

<div id="3-5"></div>
<h4>查看十分钟内修改的文件</h4>
``` sh
find . -type d -cmin 10
```

<h2>搜索字符串</h2>
<div id="4-0"></div>
<h4>在特定文件下查找匹配字符串</h4>
``` sh
grep <reg> <file>
```

<div id="4-1"></div>
<h4>查找字符串并打印行数</h4>
``` sh
grep -n <reg> <file>
```

<div id="4-2"></div>
<h4>在当前目录下查找匹配字符串</h4>
``` sh
grep -rn <reg>
```

<div id="4-3"></div>
<h4>在当前目录下查找匹配字符串</h4>
``` sh
ag <reg>
```

<h2>用户信息</h2>
<div id="5-0"></div>
<h4>打印用户名</h4>
``` sh
whoami
```

<div id="5-1"></div>
<h4>打印本机的各种 id</h4>
``` sh
id
```

<div id="5-2"></div>
<h4>打印 uid</h4>
``` sh
id -u
```

<div id="5-3"></div>
<h4>打印主机名</h4>
``` sh
hostname
```

<div id="5-4"></div>
<h4>更改主机名</h4>
``` sh
hostname <hostname>
```

<h2>显示程序位置</h2>
<div id="6-0"></div>
<h4>打印 python 的执行路径</h4>
``` sh
which python
```

<div id="6-1"></div>
<h4>打印 python 的执行路径</h4>
``` sh
where python
```

<div id="6-2"></div>
<h4>打印 python 的执行路径</h4>
``` sh
whereis python
```

<h2>显示系统信息</h2>
<div id="7-0"></div>
<h4>打印系统信息</h4>
``` sh
uname -a
```

<div id="7-1"></div>
<h4>打印文件系统信息</h4>
``` sh
df -h
```

<div id="7-2"></div>
<h4>打印开机时间</h4>
``` sh
uptime
```

<h2>显示系统信息</h2>
<div id="8-0"></div>
<h4>打印系统信息</h4>
``` sh
uname -a
```

<div id="8-1"></div>
<h4>打印文件系统信息</h4>
``` sh
df -h
```

<div id="8-2"></div>
<h4>打印开机时间以及 CPU 负载情况</h4>
``` sh
uptime
```

<div id="8-3"></div>
<h4>查看处理器信息</h4>
``` sh
cat /proc/cpuinfo
```

<h2>排序与去重</h2>
<div id="9-0"></div>
<h4>顺序打印</h4>
``` sh
ls -lah | sort
```

<div id="9-1"></div>
<h4>逆序打印</h4>
``` sh
ls -lah | sort -r
```

<div id="9-2"></div>
<h4>排序后去重</h4>
``` sh
cat <file> | sort -u
```

<h2>链接</h2>
<div id="10-0"></div>
<h4>创建硬链接, target 最好使用绝对路径</h4>
``` sh
ln <target> <link-name>
```

<div id="10-1"></div>
<h4>创建软链接</h4>
``` sh
ln -s <target> <link-name>
```

<h2>进程与线程</h2>
<div id="11-0"></div>
<h4>打印实时进程信息</h4>
``` sh
top
```

<div id="11-1"></div>
<h4>BSD 格式打印所有进程信息</h4>
``` sh
ps aux
```

<div id="11-2"></div>
<h4>标准格式打印所有进程信息</h4>
``` sh
ps -ef
```

<div id="11-3"></div>
<h4>打印 root 用户的所有进程信息</h4>
``` sh
ps -U root -u root
```

<div id="11-4"></div>
<h4>打印进程树</h4>
``` sh
ps -ejH
```

<h2>network &amp; socket</h2>
<div id="12-0"></div>
<h4>测试网络状况</h4>
``` sh
ping www.zhihu.com
```

<div id="12-1"></div>
<h4>network statistic，打印网络连接信息</h4>
``` sh
netstat
```

<div id="12-2"></div>
<h4>打印所有的 TCP 连接</h4>
``` sh
netstat -tan
```

<div id="12-3"></div>
<h4>socket statistic, 查看 socket 信息</h4>
``` sh
ss
```

<div id="12-4"></div>
<h4>打印统计信息</h4>
``` sh
ss -s
```

<div id="12-5"></div>
<h4>打印所有的 TCP 连接</h4>
``` sh
ss -at
```

<div id="12-6"></div>
<h4>打印特定状态的 TCP 连接</h4>
``` sh
ss -o state closed
```

<h2>curl &amp; wget</h2>
<div id="13-0"></div>
<h4>从远程获取到内容</h4>
``` sh
curl <url>
```

<div id="13-1"></div>
<h4>打印完整http报文</h4>
``` sh
curl -v <url>
```

<div id="13-2"></div>
<h4>下载远程文件到本地</h4>
``` sh
curl -o file <url>
```

<div id="13-3"></div>
<h4>只打印响应头</h4>
``` sh
curl -I <url>
```

<div id="13-4"></div>
<h4>整站下载</h4>
``` sh
wget -m shici.xiange.tech
```
