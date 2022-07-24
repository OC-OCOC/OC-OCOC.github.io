(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{585:function(_,v,a){"use strict";a.r(v);var t=a(6),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"oc-内存管理的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oc-内存管理的基本概念"}},[_._v("#")]),_._v(" OC 内存管理的基本概念")]),_._v(" "),a("p",[_._v("###1. 内存管理的基本概念")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("栈区 stack")])]),_._v(" "),a("li",[a("p",[_._v("堆区 heap")]),_._v(" "),a("p",[_._v("heap（堆）是最自由的一种内存，它完全由程序来负责内存的管理，包括什么时候申请，什么时候释放，而且对它的使用也没有什么大小的限制。在C/C++中，用alloc系统函数和new申请的内存都存在于heap段中。")])]),_._v(" "),a("li",[a("p",[_._v("BSS区")]),_._v(" "),a("p",[_._v("来存放没有被初始化或初始化为0的全局变量，因为是全局变量，所以在程序运行的整个生命周期内都存在于内存中。有趣的是这个段中的变量只占用程序运行时的内存空间，而不占用程序文件的储存空间。")])]),_._v(" "),a("li",[a("p",[_._v("数据区 Data")]),_._v(" "),a("p",[_._v("初始化过的全局变量数据段，该段用来保存初始化了的非0的全局变量，如果全局变量初始化为0，则编译有时会出于优化的考虑，将其放在bss段中。因为也是全局变量，所以在程序运行的整个生命周期内都存在于内存中。与bss段不同的是，data段中的变量既占程序运行时的内存空间，也占程序文件的储存空间。")])]),_._v(" "),a("li",[a("p",[_._v("代码区 text")])])]),_._v(" "),a("h3",{attrs:{id:"_2-oc内存管理的范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-oc内存管理的范围"}},[_._v("#")]),_._v(" 2. OC内存管理的范围")]),_._v(" "),a("p",[a("code",[_._v("堆区")]),_._v(" 中 继承 "),a("code",[_._v("NSObject")]),_._v(" 的 "),a("code",[_._v("对象")])]),_._v(" "),a("h2",{attrs:{id:"内存管理的原理及分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理的原理及分类"}},[_._v("#")]),_._v(" 内存管理的原理及分类")]),_._v(" "),a("ul",[a("li",[a("p",[a("strong",[_._v("引用计数")])])]),_._v(" "),a("li",[a("p",[a("code",[_._v("ARC")]),_._v(" or "),a("code",[_._v("MRC")])])])]),_._v(" "),a("h2",{attrs:{id:"mrc快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mrc快速入门"}},[_._v("#")]),_._v(" MRC快速入门")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("+1")]),_._v(" "),a("p",[_._v("alloc new copy")])]),_._v(" "),a("li",[a("p",[_._v("-1")]),_._v(" "),a("p",[_._v("release autorelease")])])]),_._v(" "),a("h2",{attrs:{id:"内存管理原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理原则"}},[_._v("#")]),_._v(" 内存管理原则")]),_._v(" "),a("ul",[a("li",[a("p",[_._v("原则")]),_._v(" "),a("p",[_._v("对象有人使用，不回收")]),_._v(" "),a("p",[_._v("使用对象，+1")]),_._v(" "),a("p",[_._v("不使用对象 -1")])]),_._v(" "),a("li",[a("p",[_._v("谁创建， 谁release")])]),_._v(" "),a("li",[a("p",[_._v("谁retain， 谁release")])]),_._v(" "),a("li",[a("p",[_._v("总结")]),_._v(" "),a("p",[_._v("+1 就该-1")])])]),_._v(" "),a("p",[_._v("内存管理的研究内容：")]),_._v(" "),a("ol",[a("li",[a("p",[_._v("野指针")]),_._v(" "),a("ol",[a("li",[_._v("定义的指针没有初始化（没有指向）")]),_._v(" "),a("li",[_._v("指向的空间已经被释放 （僵尸对象）")])])]),_._v(" "),a("li",[a("p",[_._v("内存泄漏")]),_._v(" "),a("p",[_._v("栈区指针变量已经被释放，而堆区的空间还没有被释放")])])]),_._v(" "),a("h2",{attrs:{id:"单个对象的内存管理-野指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个对象的内存管理-野指针"}},[_._v("#")]),_._v(" 单个对象的内存管理（野指针）")]),_._v(" "),a("p",[_._v("###僵尸对象\n已经被释放的对象，在内存中可能还能继续访问，但容易出")]),_._v(" "),a("p",[_._v("开启僵尸对象检测：")]),_._v(" "),a("img",{attrs:{src:"https://ww3.sinaimg.cn/large/006tKfTcgy1fbul3381n8j30pu0eyq4w.jpg",width:"800"}}),_._v(" "),a("h3",{attrs:{id:"避免使用僵尸对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免使用僵尸对象"}},[_._v("#")]),_._v(" 避免使用僵尸对象")]),_._v(" "),a("p",[_._v("对象释放后，将 "),a("code",[_._v("指针")]),_._v(" -> "),a("code",[_._v("nil")])]),_._v(" "),a("h3",{attrs:{id:"带个对象的内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#带个对象的内存泄漏"}},[_._v("#")]),_._v(" 带个对象的内存泄漏")]),_._v(" "),a("p",[_._v("⚠️ 注意 相互持有 、自己调用自己 的情况")]),_._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[_._v("[self mothd:self]；\n")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);