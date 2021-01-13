# 第4章 jQuery选择器（重点）

- jQuery最牛的地方就是其强大的选择器，使用其选择器基本可以快速轻松的找到页面的任意节点

- jQuery的选择器分类
  - 基本选择器
  - 层级选择器（或层次选择器）
  - 过滤选择器
    - 基本
    - 内容
    - 可见性
    - 属性
    - 子元素
    - 表单
    - 表单对象属性

见文档：

![1560069280016](./images/1560069280016.png)

## 4.1 基本选择器 (重点)

- 基本选择器是jquery中最简单，也是最常用的选择器

- 它通过标签名,id属性,class属性来查找匹配的DOM元素

### 1）  id选择器    

- **用法： $('#id')**

- 返回值：根据id属性匹配一个标签， 封装成jQuery对象

- 举例

  ```js
  //HTML代码：
  <div id="notMe"><p>id="notMe"</p></div>
  <div id="myDiv">id="myDiv"</div>
  
  //jQuery代码：
  $("#myDiv");
  
  //结果：
  [ <div id="myDiv">id="myDiv"</div> ]
  ```

  

### 2）  标签选择器

- **用法:  $(‘tagName’)** 
- 返回值：根据标签名匹配的一个或多个标签，封装成jQuery对象

- 举例

  ```js
  //HTML代码：
  <div>DIV1</div>
  <div>DIV2</div>
  <span>SPAN</span>
  
  //jQuery代码：
  $("div");
  
  //结果：
  [ <div>DIV1</div>, <div>DIV2</div> ]
  
  ```

  

### 3）  class选择器

- **用法:  $(‘.class’)** 

- 返回值：根据class属性值匹配一个或多个标签, 封装成jQuery对象

- 举例：

  ```js
  //HTML代码：
  <div class="notMe">div class="notMe"</div>
  <div class="myClass">div class="myClass"</div>
  <span class="myClass">span class="myClass"</span>
  
  //jQuery代码：
  $(".myClass");
  
  //结果：
  [ <div class="myClass">div class="myClass"</div>, <span class="myClass">span class="myClass"</span> ]
  ```

  

### 4）  全局选择器

- **用法:  $(*)**  

- 返回值: 匹配所有标签， 封装成jQuery对象

- 举例

  ```js
  //HTML代码：
  <div>DIV</div>
  <span>SPAN</span>
  <p>P</p>
  
  //jQuery代码：
  $("*")
  
  //结果：
  [ <div>DIV</div>, <span>SPAN</span>, <p>P</p> ]
  ```

  

### 5） 组合选择器

- **用法:  $(”div,span,.myClass”)**    

- 返回值: 所有匹配选择器的标签, 封装成jQuery对象

- 举例：

  ```js
  //HTML代码：
  <div>div</div>
  <p class="myClass">p class="myClass"</p>
  <span>span</span>
  <p class="notMyClass">p class="notMyClass"</p>
  
  //jQuery代码：
  $("div,span,p.myClass") 
  //p.myClass：表示查找的标签名必须是p标签，并且class属性要是myclass
  
  
  //结果：结果数据的顺序与要查询的元素先后顺序不一致，与HTML中元素声明的先后顺序一致。
  [ <div>div</div>, <p class="myClass">p class="myClass"</p>, <span>span</span> ]
  ```

  

## 4.2 层级选择器 (重点)

- 如果想通过DOM元素之间的层级关系来获取特定元素。例如后代元素、子元素、兄弟元素等。则需要通过层级选择器（或层次选择器）。

### 1）  ancestor descendant

- 后代选择器
- 用法:$(”form input”)**
- 说明:在给定的祖先元素下匹配所有后代元素（包括子元素的子元素，...）

### 2）  parent > child

- 子代选择器
- **用法: $(”form > input”)** 
- 说明: 在指定父元素下匹配所有子元素。
  - 注意：要区分好后代元素与子元素

### 3）  prev + next

- 相邻（紧邻）选择器（后面邻居）
- **用法: $(”label + input”)** 
- 说明: 匹配所有紧接在prev元素后的next元素。
  - 注意：从平级元素中找，而不要去子元素中查找。

### 4）  prev ~ siblings

- 兄弟（同辈）选择器（后面兄弟）
- **用法: $(”form ~ input”)** 
- 说明: 匹配prev元素之后的所有 siblings元素，不包含该元素在内，并且siblings匹配的是和prev同辈的元素，**其后辈子元素不被匹配。**



## 4.3 过滤选择器：基本

- 过滤选择器主要是通过特定的过滤规则来筛选出所需的DOM元素, 该选择器都**以 “:” 开头**

- 按照不同的过滤规则，过滤选择器可以分为基本过滤，内容过滤，可见性过滤，属性过滤，子元素过滤，表单过滤和表单对象属性过滤选择器。

### 1）   :first

- 用法: $(”tr:first”) ;   

- 说明: 匹配找到的第一个元素。

### 2）   :last

- 用法: $(”tr:last”)  

- 说明: 匹配找到的最后一个元素。与 :first 相对应。

### 3）   :not(selector)

- 用法: $(”input:not(:checked)”)

- 说明: 去除所有与给定选择器匹配的元素。有点类似于”非”，意思是没有被选中的input(当input的type=”checkbox”)。

### 4）   :even

- 用法: $(”tr:even”)   

- 说明: 匹配所有索引值为偶数的元素，从0开始计数。js的数组都是从0开始计数的。

### 5）   :odd

- 用法: $(”tr:odd”) 

- 说明: 匹配所有索引值为奇数的元素，和:even对应，从 0 开始计数。

### 6）  :eq(index)

- 用法: $(”tr:eq(0)”)   

- 说明: 匹配一个给定索引值的元素。eq(0)就是获取第一个tr元素。括号里面的是索引值，不是元素排列数。

### 7） :gt(index)

- 用法: $(”tr:gt(0)”)  

- 说明: 匹配所有大于给定索引值的元素。

### 9）  :lt(index)

- 用法: $(”tr:lt(2)”)    
- 说明: 匹配所有小于给定索引值的元素。

### 10） :header 

- 用法: $(":header")
- 说明: 匹配所有标题元素节点（h1,h2,...h6）

### 11)   :animated

- 用法: $(":animated")
- 说明: 匹配所有正在执行动画的元素节点

### 12)   :focus

- 用法: $(":focus")
- 说明: 匹配所有获取焦点的元素节点

## 4.4 过滤选择器：内容

- 内容过滤选择器的过滤规则主要体现在它所包含的子元素和文本内容上

### 1）   :contains(text)

- 用法: $(”div:contains(’John’)”)  

- 说明: 匹配包含给定文本的元素。这个选择器比较有用，当我们要选择的不是dom标签元素时，它就派上了用场了。它的作用是查找被标签”围”起来的文本内容是否符合指定的内容的。

### 2）   :has(selector)

- 用法: $(”div:has(p)”).addClass(”test”)
- 说明: 匹配含有选择器所匹配的元素的元素。这个解释需要好好琢磨，但是一旦看了使用的例子就完全清楚了:给所有包含p元素的div标签加上class=”test”。

### 3）   :empty

- 用法: $(”td:empty”) 

- 说明: 匹配空元素（不包含子元素及文本）

### 4）  :parent

- 用法: $(”td:parent”) 
- 说明: 匹配含有子元素或者文本的元素。注意:这里是”:parent”可不是”.parent”！感觉与上面讲的”:empty”形成反义词。

## 4.5 过滤选择器：可见性

- 根据元素的可见和不可见状态来选择相应的元素

### 1）   :hidden

- 用法: $(”tr:hidden”) 

- 说明: 匹配所有的不可见元素，input 元素的 type 属性为 “hidden” 的话也会被匹配到。意思是css中display:none和input type=”hidden”的都会被匹配到。同样，要在脑海中彻底分清楚冒号”:”，点号”.”和逗号”,”的区别。

### 2）  :visible

- 用法: $(”tr:visible”)  

- 说明: 匹配所有的可见元素。

## 4.6 过滤选择器：属性

- 属性过滤选择器的过滤规则是通过元素的属性来获取相应的元素。

### 1）  [attribute]

- 用法: $(”div[id]“) 
- 说明: 匹配包含给定属性的元素。例子中是选取了所有带id属性的div标签。

### 2）  [attribute=value]

- 用法: $(”input[name='newsletter']“).attr(”checked”, true)
- 说明: 匹配给定的属性是某个特定值的元素。例子中选取了所有name属性是newsletter的 input 元素。

### 3）  [attribute!=value]

- 用法: $(”input[name!='newsletter']“).attr(”checked”, true)。   
- 说明：匹配所有不含有指定的属性，或者属性不等于特定值的元素。此选择器等价于:not([attr=value])，要匹配含有特定属性但不等于特定值的元素，请使用[attr]:not([attr=value])。之前看到的 :not 派上了用场。

### 4）  [attribute^=value]

- 用法: $(”input[name^=‘news’]“)
- 说明: 匹配给定的属性是以某些值开始的元素。我们又见到了这几个类似于正则匹配的符号。现在想忘都忘不掉了吧？！

### 5 ）  [attribute$=value]

- 用法: $(”input[name$=‘letter’]“)
- 说明: 匹配给定的属性是以某些值结尾的元素。

### 6）   [attribute*=value]

- 用法: $(”input[name*=‘man’]“)
- 说明: 匹配给定的属性是以包含某些值的元素。

### 7） [][][][][selector1] [selector2] [selectorN]

- 用法：$("input[id] [name$='man']]")
- 说明：复合属性选择器，需要同时满足多个条件时使用。

## 4.7 过滤选择器：子元素

### 1）   :nth-child(index/even/odd/equation)

- 用法: $(”ul li:nth-child(2)”) 

- 说明: 匹配其父元素下的第N个子或奇偶元素.这个选择器和之前说的基础过滤(Basic Filters)中的 eq() 有些类似，不同的地方就是前者是从0开始,后者是从1开始。

### 2）   :first-child

- 用法: $(”ul li:first-child”) 

- 说明: 匹配第一个子元素。**’:first’ 只匹配一个元素，而此选择符将为每个父元素匹配一个子元素。**这里需要特别的记忆一下区别。二者的调用者都是针对要操作的元素来讲的。

### 3）   :last-child

- 用法: $(”ul li:last-child”)

- 说明: 匹配最后一个子元素。’:last’只匹配一个元素，而此选择符将为每个父元素匹配一个子元素。

### 4）   : only-child

- 用法: $(”ul li:only-child”)

- 说明: 如果某个元素是父元素中唯一的子元素，那将会被匹配。如果父元素中含有其他元素，那将不会被匹配。意思就是：只有一个子元素的才会被匹配！

## 4.8 过滤选择器：表单

### 1）   :input

- 用法: $(”:input”)  
- 说明:匹配所有 text, textarea, select 和 button 元素 。

### 2）   :text

- 用法: $(”:text”) 
- 说明: 匹配所有的单行文本框。

### 3）   :password

- 用法: $(”:password”) 
- 说明: 匹配所有密码框。

### 4）  :radio

- 用法: $(”:radio”) 
- 说明: 匹配所有单选按钮。

### 5）   :checkbox

- 用法: $(”:checkbox”) 
- 说明: 匹配所有复选框。

### 6）   :submit

- 用法: $(”:submit”) 
- 说明: 匹配所有提交按钮。

### 7）  :image

- 用法: $(”:image”) 
- 说明: 匹配所有图像域。

### 8）  :reset

- 用法: $(”:reset”) 

- 说明: 匹配所有重置按钮。

### 9）  :button

- 用法: $(”:button”) 

- 说明: 匹配所有按钮.这个包括直接写的元素button。

### 10）  :file

- 用法: $(”:file”) 

- 说明: 匹配所有文件域。

### 11）  :hidden

- 用法: $(”input:hidden”) 

- 说明: 匹配所有不可见元素，或者type为hidden的元素.这个选择器就不仅限于表单了,除了匹配input中的hidden外,那些style为hidden的也会被匹配。

## 4.9 过滤选择器：表单对象属性

- 此选择器主要对所选择的表单元素进行过滤

### 1）   :enabled

- 用法: $(”input:enabled”)

- 说明: 匹配所有可用元素.意思是查找所有input中不带有disabled=”disabled”的input.不为disabled,当然就为enabled啦。

### 2）   :disabled

- 用法: $(”input:disabled”)

- 说明: 匹配所有不可用元素.与上面的那个是相对应的。

### 3）   :checked

- 用法: $(”input:checked”)
- 说明: 匹配所有被选中的元素(复选框、单选框等，不包括下拉列表select中的option)。
  - 注意：官方文档说明是不包括select中的option，但测试中是包含的。只是不建议大家这样用。

### 4）   :selected

- 用法: $(”select option:selected”)

- 说明: 匹配所有选中的option元素。
