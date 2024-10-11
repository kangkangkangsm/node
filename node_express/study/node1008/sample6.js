function sum(x,y){
    console.log(x+y);
}

sum(1,2);

function print(param, x, y){
    param(x,y);
}
sum(1,2);
print(sum, 1, 2);
print((x,y) => console.log(x*y),10,20);
// ㅇㅇㅇ의 나이는 00살 입니다. 

var name = prompt("이름을 입력해주세요");
