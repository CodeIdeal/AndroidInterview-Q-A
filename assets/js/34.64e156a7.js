(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{198:function(t,i,n){"use strict";n.r(i);var e=n(0),v=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"content"},[n("h4",{attrs:{id:"launchmode应用场景-百度-小米-乐视"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launchmode应用场景-百度-小米-乐视","aria-hidden":"true"}},[t._v("#")]),t._v(" LaunchMode应用场景-百度-小米-乐视")]),t._v(" "),n("p",[t._v("standard，创建一个新的Activity。")]),t._v(" "),n("p",[t._v("singleTop，栈顶不是该类型的Activity，创建一个新的Activity。否则，onNewIntent。")]),t._v(" "),n("p",[t._v("singleTask，回退栈中没有该类型的Activity，创建Activity，否则，onNewIntent+ClearTop。")]),t._v(" "),n("p",[t._v("注意:")]),t._v(" "),n("ol",[n("li",[t._v('设置了"singleTask"启动模式的Activity，它在启动的时候，会先在系统中查找属性值affinity等于它的属性值taskAffinity的Task存在； 如果存在这样的Task，它就会在这个Task中启动，否则就会在新的任务栈中启动。因此， 如果我们想要设置了"singleTask"启动模式的Activity在新的任务中启动，就要为它设置一个独立的taskAffinity属性值。')]),t._v(" "),n("li",[t._v('如果设置了"singleTask"启动模式的Activity不是在新的任务中启动时，它会在已有的任务中查看是否已经存在相应的Activity实例， 如果存在，就会把位于这个Activity实例上面的Activity全部结束掉，即最终这个Activity 实例会位于任务的Stack顶端中。')]),t._v(" "),n("li",[t._v("在一个任务栈中只有一个”singleTask”启动模式的Activity存在。他的上面可以有其他的Activity。这点与singleInstance是有区别的。")])]),t._v(" "),n("p",[t._v("singleInstance，回退栈中，只有这一个Activity，没有其他Activity。")]),t._v(" "),n("p",[t._v("singleTop适合接收通知启动的内容显示页面。")]),t._v(" "),n("p",[t._v("例如，某个新闻客户端的新闻内容页面，如果收到10个新闻推送，每次都打开一个新闻内容页面是很烦人的。")]),t._v(" "),n("p",[t._v("singleTask适合作为程序入口点。")]),t._v(" "),n("p",[t._v("例如浏览器的主界面。不管从多少个应用启动浏览器，只会启动主界面一次，其余情况都会走onNewIntent，并且会清空主界面上面的其他页面。")]),t._v(" "),n("p",[t._v("singleInstance应用场景：")]),t._v(" "),n("p",[t._v("闹铃的响铃界面。 你以前设置了一个闹铃：上午6点。在上午5点58分，你启动了闹铃设置界面，并按 Home 键回桌面；在上午5点59分时，你在微信和朋友聊天；在6点时，闹铃响了，并且弹出了一个对话框形式的 Activity(名为 AlarmAlertActivity) 提示你到6点了(这个 Activity 就是以 SingleInstance 加载模式打开的)，你按返回键，回到的是微信的聊天界面，这是因为 AlarmAlertActivity 所在的 Task 的栈只有他一个元素， 因此退出之后这个 Task 的栈空了。如果是以 SingleTask 打开 AlarmAlertActivity，那么当闹铃响了的时候，按返回键应该进入闹铃设置界面。")])])}],!1,null,null,null);v.options.__file="launchmode应用场景-百度-小米-乐视.md";i.default=v.exports}}]);