const http = require("http");

const server = http.createServer((req, res)=>{
    const {method,url} = req;
    console.log(method, "===>", url);
    res.setHeader("Content-Type", "text/plain");

    if(url === "/main"){
        res.end("main!!");
    }else if(url === "/board"){
        res.end("board!!");
    }else{
        res.end("404 Error!!")
    }
    
});
// 3000 포트번호 
server.listen(3000, ()=>{
    console.log("서버 실행 성공");
});