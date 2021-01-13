# 第2章：jQuery快速入门

## 2.1 将jQuery的库文件加入应用

- jQuery库实际上就是一个js文件，只需要在网页中直接引入这个文件就可以了。
- **将jQuery的库文件加入**
  - 在开发测试时, 用的是未压缩的版本: jquery-1.7.2.js

  - 在上线项目中, 会使用压缩后的版本: jquery-1.7.2.min.js

## 2.2 HelloWorld

- 需求：使用jQuery给一个按钮绑定单击事件

```javascript
<!-- 导入jQuery库-->
<script type="text/javascript" src="../script/jquery-1.7.2.js"/>
<script type="text/javascript">
    //调用jQuery库定义的函数
    //使用$()代替window.onload
	$(function(){
    	//根据id属性获取按钮对象，并绑定单击响应函数
		$("#btnId").click(function(){
            //弹出HelloWorld
			alert("HelloWorld");
		});
	});
</script>

```

```html
<button id="btnId">ClickMe</button>
```



## 2.3. 常见问题

- **使用jquery一定要引入jquery库吗？**

  答案：是，必须先引入 

- **jquery中的$到底是什么？**

  答案： 是一个函数名， 这个函数是jQuery的核心函数。alert($)就知道了

-  **怎么为按钮添加点击响应函数的？**

  答案：     

   1、先是页面加载完成之后

   2、查找标签对象

   3、通过标签对象.click(function(){}) 绑定事件 