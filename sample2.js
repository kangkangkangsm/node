function printFunc(param){
    param(3,4);
}

printFunc(function sum(x,y){
    console.log(x+y);
});

//익명함수 이름생략가능 한번만 쓸거면 이렇게써도됌
printFunc(function (x,y){
    console.log(x+y);
});
// 화살표함수 
printFunc((x,y)=>{console.log(x*y)});
// 화살표함수 중괄호 생략 가능 
printFunc((x,y)=>console.log(x*y));
