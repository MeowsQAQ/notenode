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
