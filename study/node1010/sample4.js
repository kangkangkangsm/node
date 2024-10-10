//테스트 함수를 만들어서 1초뒤에 콜백함수가 실행되도록 

// 변수로 
const test = (callback,delay)=>{
    setTimeout(() => {
        console.log(callback);  
}, delay)};

test("첫번째 함수",1000);

// 함수로 
function test2(callback, delay){
    setTimeout(callback,delay);
}

test2(()=>{console.log("두번째 함수")},2000);