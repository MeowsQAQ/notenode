# Node.js 第5天课堂笔记

## 知识点

- Express
- MongoDB
- 项目
  + 一天半的时间

  + 在浏览器中也可以像在 Node 中的模块一样来进行编程
    * `<script>` 标签来引用加载，而且你还必须考虑加载的顺序问题
    * require.js 第三方库 AMD
    * sea.js     第三方库 CMD
  + 无论是 CommonJS、AMD、CMD、UMD、EcmaScript 6 Modules 官方规范
    * 都是为了解决 JavaScript 的模块化问题
    * CommonJS、AMD、CMD 都是民间搞出来的
    * EcmaScript 是官方规范定义
    * 官方看民间都在乱搞，开发人员为了在不同的环境使用不同的 JavaScript 模块化解决方案
    * 所以 EcmaScript 在 2015 年发布了 EcmaScript 2016 官方标准
    * 其中就包含了官方对 JavaScript 模块化的支持
    * 但是虽然标准已经发布了，但是很多 JavaScript 运行换将还不支持
    * Node 也是只在 8.5 版本之后才对 EcmaScript 6 module 进行了支持
    * less 编译器 > css
    * EcmaScript 6 -> 编译器 -> EcmaScript 5
    * 目前的前端情况都是使用很多新技术，然后利用编译器工具打包可以在低版本浏览器运行。
    * 使用新技术的目的就是为了提高效率，增加可维护性

## 复习

- 文件路径中的 `/` 和模块标识中的 `/`
- Express 中配置使用 art-template 模板引擎
- Express 中配置使用 body-parser
- Express 中配置处理静态资源
- CRUD 案例中单独提取路由模块


- 回调函数
  + 异步编程
  + 如果需要得到一个函数内部异步操作的结果，这是时候必须通过回调函数来获取
  + 在调用的位置传递一个函数进来
  + 在封装的函数内部调用传递进来的函数
- find、findIndex、forEach
  + 数组的遍历方法，都是对函数作为参数一种运用
    + every
  + some
  + includes
  + map
  + reduce
- package-lock.json 文件的作用
  + 下载速度快了
  + 锁定版本
- JavaScript 模块化
  + Node 中的 CommonJS
  + 浏览器中的
    * AMD require.js
    * CMD sea.js
  + EcmaScript 官方在 EcmaScript 6 中增加了官方支持
  + EcmaScript 6
  + 后面我们会学，编译工具
- MongoDB 数据库
  + MongoDB 的数据存储结构
    * 数据库
    * 集合（表）
    * 文档（表记录）
- MongoDB 官方有一个 mongodb 的包可以用来操作 MongoDB 数据库
  + 这个确实和强大，但是比较原始，麻烦，所以咱们不使用它
- mongoose
  + 真正在公司进行开发，使用的是 mongoose 这个第三方包
  + 它是基于 MongoDB 官方的 mongodb 包进一步做了封装
  + 可以提高开发效率
  + 让你操作 MongoDB 数据库更方便
- 掌握使用 mongoose 对数据集合进行基本的 CRUD
- 把之前的 crud 案例改为了 MongoDB 数据库版本
- 使用 Node 操作 mysql 数据库


## 目标
