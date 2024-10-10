// const {dollor,yen} = require("./number")
// console.log(dollor);

const app = require("./number");
const convert = require("./func");
console.log(app);
console.log(app.dollor);
console.log(app.yen);
console.log(app.num);

convert.yenConvert(app.yen);
convert.dollorConvert(app.dollor);

const txtPath = require("./position");

// console.log(txtPath);
