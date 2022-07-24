(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{553:function(t,e,v){"use strict";v.r(e);var r=v(6),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("p",[t._v("并不适合阅读的个人文档。")])]),t._v(" "),v("h1",{attrs:{id:"git-revert-和-git-reset-的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#git-revert-和-git-reset-的区别"}},[t._v("#")]),t._v(" "),v("strong",[t._v("git revert")]),t._v(" 和 "),v("strong",[t._v("git reset")]),t._v(" 的区别")]),t._v(" "),v("p",[t._v("先看图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://ww3.sinaimg.cn/large/006tNbRwgy1fcr9tu6vdjj30t30ez0y8.jpg",alt:""}})]),t._v(" "),v("p",[v("strong",[t._v("sourceTree")]),t._v(" 中 "),v("strong",[t._v("revert")]),t._v(" 译为**"),v("code",[t._v("提交回滚")]),t._v("**，作用为忽略你指定的版本，然后提交一个新的版本。新的版本中已近删除了你所指定的版本。")]),t._v(" "),v("p",[v("strong",[t._v("reset")]),t._v(" 为 "),v("strong",[t._v("重置到这次提交")]),t._v("，将内容重置到指定的版本。"),v("code",[t._v("git reset")]),t._v(" 命令后面是需要加2种参数的："),v("code",[t._v("–-hard")]),t._v(" 和 "),v("code",[t._v("–-soft")]),t._v("。这条命令默认情况下是 "),v("code",[t._v("-–soft")]),t._v("。")]),t._v(" "),v("p",[t._v("执行上述命令时，这该条commit号之 后（时间作为参考点）的所有commit的修改都会退回到git缓冲区中。使用"),v("code",[t._v("git status")]),t._v(" 命令可以在缓冲区中看到这些修改。而如果加上"),v("code",[t._v("-–hard")]),t._v("参数，则缓冲区中不会存储这些修改，git会直接丢弃这部分内容。可以使用 "),v("code",[t._v("git push origin HEAD --force")]),t._v(" 强制将分区内容推送到远程服务器。")]),t._v(" "),v("h4",{attrs:{id:"代码回退"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代码回退"}},[t._v("#")]),t._v(" 代码回退")]),t._v(" "),v("p",[t._v("默认参数 "),v("code",[t._v("-soft")]),t._v(",所有commit的修改都会退回到git缓冲区\n参数"),v("code",[t._v("--hard")]),t._v("，所有commit的修改直接丢弃")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("$ git reset --hard HEAD^ \t\t回退到上个版本\n$ git reset --hard commit_id\t退到/进到 指定commit_id\n")])])]),v("p",[t._v("推送到远程")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("$ git push origin HEAD --force\n")])])]),v("h4",{attrs:{id:"可以吃的后悔药-版本穿梭"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可以吃的后悔药-版本穿梭"}},[t._v("#")]),t._v(" 可以吃的后悔药->版本穿梭")]),t._v(" "),v("p",[t._v("当你回滚之后，又后悔了，想恢复到新的版本怎么办？")]),t._v(" "),v("p",[t._v("用"),v("code",[t._v("git reflog")]),t._v("打印你记录你的每一次操作记录")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v('$ git reflog\n\n输出：\nc7edbfe HEAD@{0}: reset: moving to c7edbfefab1bdbef6cb60d2a7bb97aa80f022687\n470e9c2 HEAD@{1}: reset: moving to 470e9c2\nb45959e HEAD@{2}: revert: Revert "add img"\n470e9c2 HEAD@{3}: reset: moving to 470e9c2\n2c26183 HEAD@{4}: reset: moving to 2c26183\n0f67bb7 HEAD@{5}: revert: Revert "add img"\n')])])]),v("p",[t._v("找到你操作的id如："),v("code",[t._v("b45959e")]),t._v("，就可以回退到这个版本")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("$ git reset --hard b45959e\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);