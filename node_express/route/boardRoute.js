const express = require('express')
//여기서 express라는 도구를 가져와서 쓸 준비를 해. 이 도구는 우리가 서버를 만들고 쉽게 요청과 응답을 주고받을 수 있게 도와줘.
const router = express.Router();
//router는 길 안내하는 친구야. 요청이 들어오면 어디로 가야 하는지 알려줘.
const connection = require('../db');

router.route("/")
    .get((req,res)=> {
        const query = 'SELECT * FROM TBL_BOARD';
        connection.query(query,(err,result)=> {
            if(err){
                console.error('쿼리 실행 실패 :', err);
                //res.status(500).send('서버 오류');
                return;
            }
            res.render('board', { list : result });
        });
    })
    .post((req,res)=> {
            var {boardNo,title,contents} = req.body;
            res.send(`번호 : ${boardNo}, 제목 : ${title}, 내용 : ${contents}`);
            
        });
   
    
//get 요청이 오면 board.ejs 파일을 찾아서 웹페이지를 보여줘. res.render는 HTML 파일을 화면에 보여주는 역할을 해.
router.route("/insert")
    .get((req,res)=> 
    res.render("board-insert"));


//post 요청이 오면 "test page(post)"라는 문장을 보여줘. post는 데이터를 서버로 보낼 때 사용해.
router.route("/:boardNo")
    .get((req,res)=> {
        res.send(`${req.params.boardNo}번 게시글 상세보기 화면`);
    })
    .put((req,res)=> {
        res.send(`${req.params.boardNo}번 게시글 업데이트`);
    })
    .delete((req,res)=> {
        res.send(`${req.params.boardNo}번 게시글 삭제`);
    })

  
module.exports = router;