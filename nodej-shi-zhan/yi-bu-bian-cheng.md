# 异步编程

你寻求一个陌生人的帮助。

* 等待他帮你完成这件事儿
* 回去继续你的工作，**留一个电话给他（注册回调）**
  * 他帮我完整这件事儿之后我干嘛？
  * 我决定，他只需要把结果告诉我
  * 结果：有的结果由数据，有的结果无数据
* 当他完成打你的电话通知你（调用回调函数）

你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里**留下了你的电话**，过了几天店里有货了，店员就**打了你的电话**，然后你接到电话后就到店里去取了货。在这个例子里，**你的电话号码就叫回调函数**，**你把电话留给店员就叫登记回调函数**，店里后来有货了叫做触发了回调关联的事件，**店员给你打电话叫做调用回调函数**，你到店里去取货叫做响应回调事件。

## 1.事件异步

```javascript
class Evente {
  constructor() {
    this.map = {}
  }
  add(name,fn){
    if (this.map[name]){
      this.map[name].push(fn)
      return;
    }
    this.map[name]=[fn];
    return;
  }
  emit(name,...args){
    this.map[name].forEach(fn=>{
      fn(...args)
    })
  }
}
let e = new Evente()
e.add("hello",(err,name)=>{
  if (err) {
    console.error(err);
    return;
  }
  console.log(name);
})
e.emit("hello","发生了错误")
e.emit("hello",null,"hello nodejs")
```

### 链式调用

```javascript
class ChainEvente {
  constructor() {
    this.map = {}
  }
  add(name,fn){
    if (this.map[name]){
      this.map[name].push(fn)
      return this;
    }
    this.map[name]=[fn];
    return this;
  }
  emit(name,...args){
    this.map[name].forEach(fn=>{
      fn(...args)
    })
    return this;
  }
}
let e2 = new ChainEvente()
  .add("hello",(err,name)=>{
  if (err) {
    console.error(err);
    return;
  }
  console.log(name);
})
  .emit("hello","发生了错误")
  .emit("hello",null,"hello nodejs")

```

## 2.Promise异步

ES6的新特性，专门为了处理异步，低版本不支持Promise可以通过Promise的兼容实现库，比如`promise-ployfill`,`babel-polyfill`

```javascript
const getName = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("nodejs");
  },1000);
});
const getNumber = Promise.resolve(1);
const getError = Promise.reject("出错啦~");

getError.catch(console.log);

Promise.all([getName,getName])
  .then(console.log)
  .catch(console.log);

Promise.race([getName,getName])
  .then(console.log)
  .catch(console.log);

getName
  .then(name=>{
    console.log(name);
    return 20;
  })
  .then(number=>{
    console.log(number);
  })
```

## 3.async/await 

```javascript
//Node8.9版本之后支持async/await关键字。
//async标志异步方法,调用只能then方法才能返回
async function func() {
  return 2;
}
func().then(console.log);

const getPosts = ()=>
  new Promise((resolve,reject)=>{
  resolve([
    {
      name: "a"
    },
    {
      name: "b"
    },
    {
      name: "c"
    },
    {
      name: "d"
    }
  ]);
});

async function func2() {
  try {
    const number = await func();
    const posts = await getPosts();
    console.log(number);
    console.log(posts);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("finally");
  }
}
func2();

```

## 4.Promise封装

```javascript
//promise 兼容以前的回调
const fs = require("fs");

const readFilePromise = filename =>
  new Promise((resolve,reject) =>{
    fs.readFile(filename,(err,data)=>{
      if (err){
        reject(err);
        return;
      }
      resolve(data);
    });
  });

  async function main() {
    const txt = await readFilePromise("harryporry.txt");
    console.log(txt.toString());
  }

  main();
// harryporry.txt
// harryporry no.1
```

