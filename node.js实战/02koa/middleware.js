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
