const express = require('express');
const router = express.Router();
const connection = require('../db');

router.route("/search/:id") 
    .get((req, res) => { 
        const id = req.params.id; 
        const query = `SELECT * FROM tbl_user WHERE id = ?`; 
        
        connection.query(query, [id], (err, result) => {
            if (err) {
                console.error('유저 검색 쿼리 실행 실패:', err);
                return;
            }
            res.render('user-update', { list: result[0] });
            console.log(result[0]);
        });
    })
    .put((req, res) => {
        const id = req.params.id;
        const { pwd, name, gender } = req.body; 
        const query = `UPDATE tbl_user SET pwd = ?, name = ?, gender = ? WHERE id = ?`;
        connection.query(query, [pwd, name, gender, id], (err, result) => {
            if (err) {
                console.error('업데이트 쿼리 실행 실패:', err);
                return;
            }
            res.redirect("/user"); 
    });
})
router.route("/")
    .get((req, res) => {
        const query = 'SELECT * FROM TBL_USER';
        
        connection.query(query, (err, result) => {
            if(err){
                console.error('쿼리 실행 실패 :', err);
                return;
            }
            res.render('user', { list: result });
        });
    })
    .post((req, res) => {
        console.log(req.body);
        var { id, pwd, name, gender } = req.body; 
        const query = `INSERT INTO tbl_user (id, pwd, name, gender) VALUES ('${id}', '${pwd}', '${name}', '${gender}')`; 
        
        connection.query(query, (err) => { 
            if(err){
                console.error('user 인서트 쿼리 실행 실패 :', err); 
                return;
            }
            res.redirect("/user");
        });
    })
    
    .post((req, res) => {
        console.log(req.body);
        var user = req.body; 
        const query = 'INSERT INTO tbl_user VALUES (?, ?, ?, ?)';
        // 위에 순차적으로 들어감 
        connection.query(query,[user.id, user.pwd, user.name, user.gender], (err,result) => { 
            if(err){
                console.error('user 인서트 쿼리 실행 실패 :', err); 
                return;
            }
            res.redirect("/user");
        });
    });

router.route("/add")
    .get((req, res) => {
        res.render("user-add");
    });

module.exports = router;
