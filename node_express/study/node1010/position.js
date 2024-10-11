const path = require("path");
//join 내가 작성한 애들을 합쳐서 경로로 만들어주는애
var txtPath = path.join(__dirname,"note","text.txt");
console.log(txtPath);
module.exports = txtPath;

// 내가 쓰고있는 디렉터리 까지
var dirPath = path.dirname(__filename);
console.log(dirPath);
// 내가 쓰고있는 파일만 
var filename = path.basename(__filename,);
console.log(filename);
// 내가 쓰고있는 파일만 (확장자 제거)
var filename = path.basename(__filename,".js");
console.log(filename);
