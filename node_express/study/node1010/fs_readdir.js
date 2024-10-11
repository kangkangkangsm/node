//작업중인 파일목록 보여줌
const fs = require("fs");
fs.readdir("./",(err,files)=>{
    if(err){
        console.log("오류!",err);
        return;
    }
    console.log(files);
});