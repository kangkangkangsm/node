const express = require('express')
//여기서 express라는 도구를 가져와서 쓸 준비를 해. 이 도구는 우리가 서버를 만들고 쉽게 요청과 응답을 주고받을 수 있게 도와줘.
const app = express()
//app은 우리가 사용하는 서버라고 생각하면 돼. 이제 이 app이라는 친구가 우리가 설정한 규칙대로 일하게 할 거야.

app.set("view engine", "ejs");
//여기서는 EJS라는 걸 "뷰 엔진"으로 설정하는 거야. "뷰 엔진"은 웹페이지를 만들어서 보여주는 친구라고 생각하면 돼. EJS는 우리가 HTML 파일에 자바스크립트를 넣어서 데이터를 넣거나 변수를 바꿀 수 있게 도와줘.
app.set("views", "./template");
//이 줄은 어디에 그 HTML 파일들이 있는지 알려주는 거야. 지금은 ./template 폴더 안에 HTML 파일들이 있을 거라고 알려주는 거지.
//./template 폴더 안에 EJS 파일들이 있으면, 서버가 요청을 받을 때 그 파일들을 찾아서 화면에 보여줄 수 있어.
//위에 두 줄은 우리가 서버에서 HTML 파일을 쉽게 만들고 보여줄 수 있게 도와주는 설정이야. EJS라는 도구를 사용하는 건데, 이걸 쓰면 HTML처럼 생긴 파일에 자바스크립트 코드를 넣어서 동적인 웹페이지를 만들 수 있어.
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use("/board", require("./route/boardRoute"));
// "/"는 기본 경로를 의미해. 즉, 이 서버에 접속할 때 모든 경로에서 이 파일의 규칙을 따를 수 있다는 뜻이야.
// **require("./route/boardRoute")**는 boardRoute라는 파일을 가져오라는 명령이야. 그 파일에는 우리가 정한 여러 경로와 그에 따른 규칙들이 들어있어.
// 이제 이 boardRoute 파일에서 만들어둔 규칙들을 서버에 적용해서, 사람들이 요청을 보내면 그 규칙대로 응답해주는 거야.

app.listen(3000,()=>{
    console.log("server start!");
})
//서버가 3000번이라는 번호로 일을 시작해. 컴퓨터는 이 번호를 이용해서 서버에 접속해.

// get 조회 
// put 수정
// delete 삭제
