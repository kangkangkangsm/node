function test(){
    console.log("테스트 함수");
}

setTimeout(test,1000);
setTimeout(() => {console.log("1초후 실행")},1000);
setTimeout(() => console.log("화살표함수"),2000);
