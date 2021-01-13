# 第6章 jQuery操作DOM

> DOM包含哪些内容？
>
> html、属性、文本、样式

## 6.1 jQuery操作文本

- html([val]) ：得到元素的内容或者设置元素的内容。类似js中的innerHTML
- text([val]) ：得到或设置元素节点对象的文本内容。类似js中的innerText
- val([value])：得到或设置value属性。类似js中的value
- val([选项值1,选项值2,…,选项值n]) 设置单选框、多选框或下拉列表被选中的值

## 6.2 jQuery操作属性

- attr(属性名) ：返回“属性名”对应的属性值
- attr(属性名,属性值) ：将“属性名”对应的属性设置为“属性值”
- prop(属性名)：获取指定属性值
- prop(属性名,属性值)：为指定属性赋值
- removeAttr(name)：根据属性名删除对应的属性

## 6.3 jQuery操作节点元素（html）

- 增
  - 内后
    - append():  A.append(B),将B追加到A元素的内部（后置）
    - appendTo()：A.appendTo(B),将A追加到B元素的内部（后置）
  - 内前
    - prepend():A.prepend(B),将B追加到A元素的内部（前置）
    - prependTo():
  - 外后
    - after():A.after(B),将B追加到A的外部（后置）
    - insertAfter()
  - 外前
    - before()：A.before(B),将B追加到A的外部（前置）
    - insertBefore()
- 删
  - empty()：删除匹配元素的所有子元素（掏空）(不包括本身)。
  - remove()：删除匹配的元素及其子元素(包括本身)
- 改
  - replaceWith()：A.replaceWith(B)，用B元素替换A元素
  - replaceAll()：A.replaceAll(B)，用A元素替换B元素
- 查
  - eq()
  - first()
  - last()
  - filter()
  - is()
  - has()：匹配包含指定子元素的父元素节点
  - add():相当于并集选择器
  - children()：查询子代元素
  - find()：查询后代元素
  - parent():查询父一代元素
  - parents():查询父n代元素
  - next():查询后面第一个兄弟元素
  - nextAll():查询后面所有兄弟元素
  - prev():查询前一个兄弟元素
  - prevAll()：查询前面所有兄弟元素
  - siblings():查询前后所有兄弟元素

## 6.4 jQuery操作样式（css）

- css(name)：获取指定样式属性值
- css(name,value)：为指定样式赋值
- addClass()：添加class属性【前提，必须在使用之前，准备一个类样式表】
- removeClass()：移除class属性
