// public int test(String name){

// }
// 자바와 달리 자바 스크립트는 리턴타입이 존재하지 않는다.
function test(name,age){
    console.log(`${name}님의 나이는 ${age}세 입니다.  환영합니다.`);
}

// 함수를 변수에 담아서 활용하는것도 가능 
const test2 = function (name,age) {
    console.log(`${name}님의 나이는 ${age}세 입니다.  환영합니다.`);
};
// 함수를 선언함 과 동시에 호출 (초기화? 비동기통신하고 같이할때)
(function (name, age){
    console.log(`${name}님의 나이는 ${age}세 입니다.  환영합니다.`);
}("박영희", 30));

test("강선민",25);
test2("김철수", 20);