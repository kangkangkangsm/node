const express = require('express');
const cors = require('cors');
const path = require('path');
const oracledb = require('oracledb');
const { message}  = require('coolsms-node-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// ejs 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '.')); // .은 경로

const config = {
  user: 'SYSTEM',
  password: 'test1234',
  connectString: 'localhost:1521/xe'
};

// Oracle 데이터베이스와 연결을 유지하기 위한 전역 변수
let connection;

// 데이터베이스 연결 설정
async function initializeDatabase() {
  try {
    connection = await oracledb.getConnection(config);
    console.log('Successfully connected to Oracle database');
  } catch (err) {
    console.error('Error connecting to Oracle database', err);
  }
}

initializeDatabase();

// 엔드포인트
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.post('/login', async (req, res) => {
//   var {id, pwd} = req.body;
//   var query = `SELECT COUNT(*) AS CNT FROM MEMBER WHERE ID = '${id}' AND PWD = ${pwd}`; 
//   console.log(query);
//   var result = await connection.execute(query);
//   const columnNames = result.metaData.map(column => column.name);
//     // 쿼리 결과를 JSON 형태로 변환
//     const rows = result.rows.map(row => {
//       // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
//       const obj = {};
//       columnNames.forEach((columnName, index) => {
//         obj[columnName] = row[index];
//       });
//       return obj;
//     });
//     res.json(rows);
//   });
app.post('/login1', async (req, res) => {
  var {memberId, memberPw} = req.body;
  console.log("★★★★★★★★★★★★★★★★★★★★★★★★==>",memberId);
  var query = `SELECT COUNT(*) AS CNT FROM MEMBER WHERE USERID = '${memberId}' AND PWD = '${memberPw}'`; 
  var result = await connection.execute(query);
  const columnNames = result.metaData.map(column => column.name);
  // 쿼리 결과를 JSON 형태로 변환
  const rows = result.rows.map(row => {
    // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
    const obj = {};
    columnNames.forEach((columnName, index) => {
      obj[columnName] = row[index];
    });
      return obj;
    });
    res.json(rows);
  });

// post방식 
// app.post('/insertV1', async (req, res) => {
//   var { stuNo, stuName, stuDept, stuGrade, stuGender } = req.body;
//   var query = `INSERT INTO STUDENT(STU_NO, STU_NAME, STU_DEPT, STU_GRADE, STU_GENDER) 
//                 VALUES(${stuNo},'${stuName}','${stuDept}','${stuGrade}','${stuGender}')`

//   await connection.execute(query, [], {autoCommit : true});
//   res.json({message : "추가되었다!"})
// });

app.get('/login', async (req, res) => {
  const { memid, mempw, memname, mememail, memphone, memgender } = req.query;
  try {
    await connection.execute(
      `INSERT INTO MEMBER VALUES('${memid}','${mempw}','${memname}','${mememail}','${memphone}','${memgender}')`, [], {autoCommit :true}
    );
    res.json({message : "넣었슴!"});
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});

// 정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬
app.get('/list', async (req, res) => {
  const {keyword, grade, orderby, orderlist} = req.query;
  console.log(orderby, orderlist)
  try {
    const result = await connection.execute(`SELECT * FROM STUDENT WHERE (STU_NAME LIKE '%${keyword}%' OR STU_NO LIKE '%${keyword}%') AND STU_GRADE LIKE '%${grade}%' ORDER BY ${orderlist} ${orderby}`);
    const columnNames = result.metaData.map(column => column.name);
    // 쿼리 결과를 JSON 형태로 변환
    const rows = result.rows.map(row => {
      // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
      const obj = {};
      columnNames.forEach((columnName, index) => {
        obj[columnName] = row[index];
      });
      return obj;
    });
    res.json(rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});
// 정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬정렬


app.get('/update', async (req, res) => {
  const { stuNo , stuName, stuDept, stuGrade, stuGender } = req.query;
  var  query = `UPDATE STUDENT SET 
                  STU_NAME = '${stuName}',
                  STU_DEPT = '${stuDept}',
                  STU_GRADE = '${stuGrade}',
                  STU_GENDER = '${stuGender}'
                  WHERE STU_NO = '${stuNo}'`
  try {
    await connection.execute(
      query, [], {autoCommit :true}
    );
    res.json([{message : "저장되었습니다!"}]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});
app.get('/delete', async (req, res) => {
  const { stuNo } = req.query;
  try {
    await connection.execute(
      `DELETE FROM STUDENT WHERE STU_NO='${stuNo}'`, [], {autoCommit :true}
    );
    res.json([{message : "삭제되었습니다!"}]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});

app.get('/delete2', async (req, res) => {
  const { stuNo } = req.query;
  try {
    await connection.execute(`DELETE FROM STUDENT WHERE STU_NO IN(${stuNo})`, [], {autoCommit :true}
    );
    res.json([{message : "삭제되었습니다!"}]);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});

app.get('/insert', async (req, res) => {
  const { stuNo, stuName, stuDept, stuGrade, stuGender } = req.query;
  try {
    await connection.execute(
      `INSERT INTO STUDENT(STU_NO,STU_NAME,STU_DEPT,STU_GRADE,STU_GENDER) VALUES('${stuNo}','${stuName}','${stuDept}','${stuGrade}','${stuGender}')`, [], {autoCommit :true}
    );
    res.json({message : "넣었슴!"});
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});

app.get('/arr1', async (req, res) => {
  const {} = req.query;
  try {
    res.json({message : "넣었슴!"});
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error executing query');
  }
});


// app.post('/login', async (req, res) => {
//   var {memberid, memberpw,membername,memberemail,memberphone,membergender} = req.body;
//   var query = `INSERT INTO MEMBER VALUES('${memberid}','${memberpw}','${membername}','${memberemail}','${memberphone}','${membergender}')`; 
//   var result = await connection.execute(query, [], {autoCommit : true});
//   const columnNames = result.metaData.map(column => column.name);
//     // 쿼리 결과를 JSON 형태로 변환
//     const rows = result.rows.map(row => {
//       // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
//       const obj = {};
//       columnNames.forEach((columnName, index) => {
//         obj[columnName] = row[index];
//       });
//       return obj;
//     });
//     res.json(rows);
//   });

// app.get('/te9999', async (req, res) => {
//   const { stuno999, stuname999, studept999} = req.query;
//   try {
//     await connection.execute(
//       `INSERT INTO STUDENT(STU_NO,STU_NAME,STU_DEPT,STU_GRADE) VALUES('${stuno999}','${stuname999}','${studept999}','2')`, [], {autoCommit :true}
//     );
//     res.json({message : "넣었슴!"});
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).send('Error executing query');
//   }
// });
// id 체크
app.get('/idCheck', async (req, res) => {
  var { stuNo } = req.query;
  var query = `SELECT COUNT(*) AS CNT FROM STUDENT WHERE STU_NO = ${stuNo}`;
  const result = await connection.execute(query);

  const columnNames = result.metaData.map(column => column.name);
  // 쿼리 결과를 JSON 형태로 변환
  const rows = result.rows.map(row => {
    // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
    const obj = {};
    columnNames.forEach((columnName, index) => {
      obj[columnName] = row[index];
    });
    return obj;
  });

  res.json(rows);
});

app.get('/idCheck1', async (req, res) => {
  var { memid } = req.query;
  var query = `SELECT COUNT(*) AS CNT FROM MEMBER WHERE USERID = '${memid}'`;
  const result = await connection.execute(query);

  const columnNames = result.metaData.map(column => column.name);
  // 쿼리 결과를 JSON 형태로 변환
  const rows = result.rows.map(row => {
    // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
    const obj = {};
    columnNames.forEach((columnName, index) => {
      obj[columnName] = row[index];
    });
    return obj;
  });

  res.json(rows);
});
// app.get('/update', async (req, res) => {
//   const { stuNo } = req.query;
//   try {
//     await connection.execute(
//       `DELETE FROM STUDENT WHERE STU_NO='${stuNo}'`, [], {autoCommit :true}
//     );
//     res.json([{message : "삭제되었습니다!"}]);
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).send('Error executing query');
//   }
// });

// app.get('/search', async (req, res) => {
//   const { id } = req.query;
//   try {
//     const result = await connection.execute(`SELECT * FROM STUDENT WHERE STU_NO LIKE '%${id}%'`);
//     const columnNames = result.metaData.map(column => column.name);

//     // 쿼리 결과를 JSON 형태로 변환
//     const rows = result.rows.map(row => {
//       // 각 행의 데이터를 컬럼명에 맞게 매핑하여 JSON 객체로 변환
//       const obj = {};
//       columnNames.forEach((columnName, index) => {
//         obj[columnName] = row[index];
//       });
//       return obj;
//     });
//     res.json(rows);
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).send('Error executing query');
//   }
// });



// 서버 시작
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});