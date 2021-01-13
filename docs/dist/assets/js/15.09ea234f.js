(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{384:function(v,_,l){"use strict";l.r(_);var e=l(42),r=Object(e.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"第6章-jquery操作dom"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#第6章-jquery操作dom"}},[v._v("#")]),v._v(" 第6章 jQuery操作DOM")]),v._v(" "),l("blockquote",[l("p",[v._v("DOM包含哪些内容？")]),v._v(" "),l("p",[v._v("html、属性、文本、样式")])]),v._v(" "),l("h2",{attrs:{id:"_6-1-jquery操作文本"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-jquery操作文本"}},[v._v("#")]),v._v(" 6.1 jQuery操作文本")]),v._v(" "),l("ul",[l("li",[v._v("html([val]) ：得到元素的内容或者设置元素的内容。类似js中的innerHTML")]),v._v(" "),l("li",[v._v("text([val]) ：得到或设置元素节点对象的文本内容。类似js中的innerText")]),v._v(" "),l("li",[v._v("val([value])：得到或设置value属性。类似js中的value")]),v._v(" "),l("li",[v._v("val([选项值1,选项值2,…,选项值n]) 设置单选框、多选框或下拉列表被选中的值")])]),v._v(" "),l("h2",{attrs:{id:"_6-2-jquery操作属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-jquery操作属性"}},[v._v("#")]),v._v(" 6.2 jQuery操作属性")]),v._v(" "),l("ul",[l("li",[v._v("attr(属性名) ：返回“属性名”对应的属性值")]),v._v(" "),l("li",[v._v("attr(属性名,属性值) ：将“属性名”对应的属性设置为“属性值”")]),v._v(" "),l("li",[v._v("prop(属性名)：获取指定属性值")]),v._v(" "),l("li",[v._v("prop(属性名,属性值)：为指定属性赋值")]),v._v(" "),l("li",[v._v("removeAttr(name)：根据属性名删除对应的属性")])]),v._v(" "),l("h2",{attrs:{id:"_6-3-jquery操作节点元素-html"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-jquery操作节点元素-html"}},[v._v("#")]),v._v(" 6.3 jQuery操作节点元素（html）")]),v._v(" "),l("ul",[l("li",[v._v("增\n"),l("ul",[l("li",[v._v("内后\n"),l("ul",[l("li",[v._v("append():  A.append(B),将B追加到A元素的内部（后置）")]),v._v(" "),l("li",[v._v("appendTo()：A.appendTo(B),将A追加到B元素的内部（后置）")])])]),v._v(" "),l("li",[v._v("内前\n"),l("ul",[l("li",[v._v("prepend():A.prepend(B),将B追加到A元素的内部（前置）")]),v._v(" "),l("li",[v._v("prependTo():")])])]),v._v(" "),l("li",[v._v("外后\n"),l("ul",[l("li",[v._v("after():A.after(B),将B追加到A的外部（后置）")]),v._v(" "),l("li",[v._v("insertAfter()")])])]),v._v(" "),l("li",[v._v("外前\n"),l("ul",[l("li",[v._v("before()：A.before(B),将B追加到A的外部（前置）")]),v._v(" "),l("li",[v._v("insertBefore()")])])])])]),v._v(" "),l("li",[v._v("删\n"),l("ul",[l("li",[v._v("empty()：删除匹配元素的所有子元素（掏空）(不包括本身)。")]),v._v(" "),l("li",[v._v("remove()：删除匹配的元素及其子元素(包括本身)")])])]),v._v(" "),l("li",[v._v("改\n"),l("ul",[l("li",[v._v("replaceWith()：A.replaceWith(B)，用B元素替换A元素")]),v._v(" "),l("li",[v._v("replaceAll()：A.replaceAll(B)，用A元素替换B元素")])])]),v._v(" "),l("li",[v._v("查\n"),l("ul",[l("li",[v._v("eq()")]),v._v(" "),l("li",[v._v("first()")]),v._v(" "),l("li",[v._v("last()")]),v._v(" "),l("li",[v._v("filter()")]),v._v(" "),l("li",[v._v("is()")]),v._v(" "),l("li",[v._v("has()：匹配包含指定子元素的父元素节点")]),v._v(" "),l("li",[v._v("add():相当于并集选择器")]),v._v(" "),l("li",[v._v("children()：查询子代元素")]),v._v(" "),l("li",[v._v("find()：查询后代元素")]),v._v(" "),l("li",[v._v("parent():查询父一代元素")]),v._v(" "),l("li",[v._v("parents():查询父n代元素")]),v._v(" "),l("li",[v._v("next():查询后面第一个兄弟元素")]),v._v(" "),l("li",[v._v("nextAll():查询后面所有兄弟元素")]),v._v(" "),l("li",[v._v("prev():查询前一个兄弟元素")]),v._v(" "),l("li",[v._v("prevAll()：查询前面所有兄弟元素")]),v._v(" "),l("li",[v._v("siblings():查询前后所有兄弟元素")])])])]),v._v(" "),l("h2",{attrs:{id:"_6-4-jquery操作样式-css"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-jquery操作样式-css"}},[v._v("#")]),v._v(" 6.4 jQuery操作样式（css）")]),v._v(" "),l("ul",[l("li",[v._v("css(name)：获取指定样式属性值")]),v._v(" "),l("li",[v._v("css(name,value)：为指定样式赋值")]),v._v(" "),l("li",[v._v("addClass()：添加class属性【前提，必须在使用之前，准备一个类样式表】")]),v._v(" "),l("li",[v._v("removeClass()：移除class属性")])])])}),[],!1,null,null,null);_.default=r.exports}}]);