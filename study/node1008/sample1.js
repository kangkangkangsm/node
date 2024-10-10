function sum(x,y){
    console.log(x+y);
}
function mul(x,y){
    console.log(x*y);
}

function printFunc(param){
   param(3,3);
}
print("==========================================");
print("안녕");
print(123);
print(true);
sum(1,2);
printFunc(sum);
printFunc(mul);
print("==========================================");
printFunc(mul);

function mnu(x,y){
    console.log(x-y);
}

function printFunc2(param){
    param(3,5);
}

printFunc2(mnu);