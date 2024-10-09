// 2초후에 숫자 '1'을 콘솔로 출력하세요 

// console.log(0);
// setTimeout(()=>{console.log(1)},2000);
// console.log(2);
setTimeout(()=>{console.log(0)},100);
setTimeout(()=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        setTimeout(()=>{
            console.log(3);   
        },1000)
    },1000)
},1000);