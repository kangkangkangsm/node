//작업중인 파일목록 보여줌
const fs = require("fs");
//utf8 < 인코딩 방식
fs.readFile("text.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(data.toString());
    // console.log(data);
    
    //써서 저장하는거
    // text2 저장할 파일명 , data <-- 넣고자하는거 하드코딩가능할걸?
    fs.writeFile("text3.txt", data, (err)=>{
        if(err){
            console.log("저장 실패");
            return;
        }
        console.log("저장성공");
    });
});