function print1(){
    console.log("첫번째 출력");
}

//3초후 출력 
setTimeout(print1, 3000);
setTimeout(function (){
    console.log("두번째 출력")
}, 6000);
setTimeout(()=> {
    console.log("세번째 출력")
}, 9000);
