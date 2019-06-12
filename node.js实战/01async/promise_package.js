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
