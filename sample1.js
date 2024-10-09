function sum(x,y){
    console.log(x+y);
}
function mul(x,y){
    console.log(x*y);
}
function print(param){
    console.log(param);
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