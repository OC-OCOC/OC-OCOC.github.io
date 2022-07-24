(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{569:function(s,a,e){"use strict";e.r(a);var t=e(6),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("比较水的 Personal Notes")])]),s._v(" "),e("h2",{attrs:{id:"查看你的系统有几种shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看你的系统有几种shell"}},[s._v("#")]),s._v(" 查看你的系统有几种shell")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("cat /etc/shells\n")])])]),e("p",[s._v("显示")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("/bin/bash\n/bin/csh\n/bin/ksh\n/bin/sh\n/bin/tcsh\n/bin/zsh\n")])])]),e("h2",{attrs:{id:"安装-oh-my-zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 oh my zsh")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\n")])])]),e("p",[s._v("重新打开终端，输入")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("zsh\n")])])]),e("p",[s._v("即可切换终端，并且发现 oh my zsh 已经帮我们配置好 zsh 了")]),s._v(" "),e("h2",{attrs:{id:"修改主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改主题"}},[s._v("#")]),s._v(" 修改主题")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("open ~/.zshrc \n")])])]),e("p",[s._v("修改 "),e("code",[s._v("ZSH_THEME=”robbyrussell”")]),s._v("，主题在 ~/.oh-my-zsh/themes 目录下。\n修改为")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('ZSH_THEME="kolo"\n')])])]),e("p",[s._v("可以"),e("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("参照这里"),e("OutboundLink")],1),s._v("进行选择.")]),s._v(" "),e("h2",{attrs:{id:"设置为默认shell"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置为默认shell"}},[s._v("#")]),s._v(" 设置为默认shell")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("chsh -s /bin/zsh\n")])])]),e("h2",{attrs:{id:"添加自定义命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义命令"}},[s._v("#")]),s._v(" 添加自定义命令")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("open ~/.zshrc\n")])])]),e("p",[s._v("添加显示隐藏文件的快捷命令")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("alias fd='defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder'\nalias fh='defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder'")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);