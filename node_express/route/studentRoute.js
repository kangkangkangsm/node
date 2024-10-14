const express = require('express');
const router = express.Router();
const connection = require('../db');

router.route("/search/:stuNo") 
    .get((req, res) => { 
        const stuNo = req.params.stuNo; 
        const query = `SELECT * FROM tbl_student WHERE stuNo = ?`; 
        
        connection.query(query, [stuNo], (err, result) => {
            if (err) {
                console.error('유저 검색 쿼리 실행 실패:', err);
                return;
            }
            res.render('student-update', { list: result[0] });
            console.log(result[0]);
        });
    })
    .put((req, res) => {
        const stuNo = req.params.stuNo;
        const { stuName, stuDept, stuGrade } = req.body; 
        const query = `UPDATE tbl_student SET stuName = ?, stuDept = ?, stuGrade = ? WHERE stuNo = ?`;
        connection.query(query, [stuName, stuDept, stuGrade, stuNo], (err, result) => {
            if (err) {
                console.error('업데이트 쿼리 실행 실패:', err);
                return;
            }
            res.redirect("/student"); 
        });
    })
router.route("/")
    .get((req, res) => {
        const query = 'SELECT * FROM tbl_student';
        
        connection.query(query, (err, result) => {
            if(err){
                console.error('쿼리 실행 실패 :', err);
                return;
            }
            res.render('student', { list: result });
        });
    })
    .post((req, res) => {
        console.log(req.body);
        var { stuNo, stuName, stuDept, stuGrade } = req.body; 
        const query = `INSERT INTO tbl_student (stuNo, stuName, stuDept, stuGrade) VALUES ('${stuNo}', '${stuName}', '${stuDept}', '${stuGrade}')`; 
        
        connection.query(query, (err) => { 
            if(err){
                console.error('user 인서트 쿼리 실행 실패 :', err); 
                return;
            }
            res.redirect("/student");
        });
    });
router.route("/delete/:stuNo")
.delete((req, res) => {
    const stuNo = req.params.stuNo;
    const query = `DELETE FROM tbl_student WHERE stuNo = ?`;
    connection.query(query, [stuNo], (err, result) => {
        if (err) {
            console.error('삭제 쿼리 실행 실패:', err);
            return;
        }
        res.redirect("/student"); 
    });
})
router.route("/add")
    .get((req, res) => {
        res.render("student-add");
    });

module.exports = router;
