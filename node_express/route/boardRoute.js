const express = require('express'); // express라는 도구를 가져와서 사용 준비를 해. 이 도구는 서버를 쉽게 만들 수 있게 도와줘.
const router = express.Router(); // router는 길을 안내하는 역할을 해. 어떤 요청이 들어오면 어디로 가야 하는지 알려줘.
const connection = require('../db'); // 데이터베이스와 연결하는 친구를 불러와.

router.route("/")
    .get((req,res)=> { // 누군가가 웹사이트에 오면(get 요청) 데이터를 가져와서 보여줘.
        const query = 'SELECT * FROM TBL_BOARD'; // 게시판에 있는 모든 글을 가져오는 쿼리(질문)를 만들었어.
        connection.query(query,(err,result)=> { // 데이터베이스에 가서 질문을 던지고, 답을 가져오는 거야.
            if(err){
                console.error('쿼리 실행 실패 :', err); // 만약 문제가 생기면 오류를 보여줘.
                return;
            }
            res.render('board', { list : result }); // 가져온 글들을 웹페이지에 보여줘.
        });
    })
    .post((req,res)=> { // 새로운 글을 쓰고 싶을 때(post 요청) 글 번호, 제목, 내용을 받아서 처리해.
        var {boardNo,title,contents} = req.body; // 글 번호, 제목, 내용이라는 정보를 받아.
        res.send(`번호 : ${boardNo}, 제목 : ${title}, 내용 : ${contents}`); // 받은 정보를 다시 보여줘.
    });

router.route("/insert")
    .get((req,res)=> 
    res.render("board-insert")); // 새로운 글을 작성하는 페이지로 안내해.

router.route("/:boardNo") // 어떤 특정한 글을 보고 싶을 때 그 글 번호를 이용해.
    .get((req,res)=> { // 데이터 호출
        res.send(`${req.params.boardNo}번 게시글 상세보기 화면`); // 몇 번 글을 보고 싶은지 알려주면, 그 글을 보여줘.
    })
    .put((req,res)=> { // 데이터 수정
        res.send(`${req.params.boardNo}번 게시글 업데이트`); // 몇 번 글을 수정하고 싶을 때 그 글을 업데이트해.
    })
    .delete((req,res)=> { // 데이터 삭제
        res.send(`${req.params.boardNo}번 게시글 삭제`); // 몇 번 글을 삭제하고 싶을 때 그 글을 삭제해.
    });

module.exports = router; // 이 코드를 다른 곳에서 사용할 수 있게 내보내줘.


// get 데이터 호출
// post 데이터 삽입
// put 데이터 수정
// delete 데이터 삭제 