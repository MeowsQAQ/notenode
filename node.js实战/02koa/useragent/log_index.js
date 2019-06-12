//创建中间件
const Koa = require("koa")
const userAgent = require("koa-useragent")
const log = require("./log");

const app = new Koa();
app.use(userAgent);

const config = { format: text => `====== ${text} ======`};   //反引号
app.use(log(config));

app.listen(3000);
