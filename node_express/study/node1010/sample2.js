const sum = function(x,y){
    return x+y;
};

console.log(sum(12345231,213523152133));

//sum 화살표 함수
const sum2 = 
(x,y)=>{
    return x+y;
}
// 화실표함수 생략
const sum2_1 = (x,y)=> x+y; 

const print = function(){
    console.log("안녕하세요.");
}

const print2 = () => console.log("안녕하세요.");

const print2_1 = name => console.log(`${name}님 안녕하세요.`);
console.log(sum2(3,5));
print();
print2();
print2_1("강선민");

const multiple1 = function(x,y){
    console.log(x*y);
}

const multiple1_1 = (x,y) => console.log(x*y);

multiple1_1(3,5);
