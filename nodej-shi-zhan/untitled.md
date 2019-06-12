# koa.js

https://github.com/koajs/compose

## 1.中间件测试

```javascript
//中间件就像一个洋葱圈从一个的最外层到最内层，再到另一个的最外层
const compose = require('koa-compose');

async function a(ctx,next) {
  console.log(1);
  const hello = await Promise.resolve("hello node.js1");
  console.log(hello);
  await next(); // 此处相当于等待下一个异步函数的Promise也就是b  这个地方相当于   //await b(ctx)  //b中的相当于没有 最后一句代码相当于 a({})
  console.log("a end");
}

async function b(ctx,next) {
  console.log(2);
  const hello = await Promise.resolve("hello node.js2");
  console.log(hello);
  await next();  // 没有下一个异步函数就会继续执行log(b,end)，b全部执行完再返回a
  console.log("b end");
}
compose([a,b])({});
```

输出结果为

```text
1
hello node.js1
2
hello node.js2
b end
a end
```

## 2.创建中间件

{% code-tabs %}
{% code-tabs-item title="log.js" %}
```javascript
module.exports = options =>{

  if(!options.format){
    console.error("需要传递format函数");
  }
  return async(ctx,next)=>{
    console.log(options.format(ctx.url));
    await next()
  };
};
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="log\_index.js" %}
```javascript
//创建中间件
const Koa = require("koa")
const userAgent = require("koa-useragent")
const log = require("./log");

const app = new Koa();
app.use(userAgent);

const config = { format: text => `====== ${text} ======`};   //反引号
app.use(log(config));

app.listen(3000);

```
{% endcode-tabs-item %}
{% endcode-tabs %}

* 访问
  * http://localhost:3000
  * http://localhost:3000/some
* 结果如下
  * ====== /some ======
  * ====== / ======

