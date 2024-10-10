// 2초후에 숫자 '1'을 콘솔로 출력하세요 

// console.log(0);
// setTimeout(()=>{console.log(1)},2000);
// console.log(2);
// setTimeout(()=>{console.log(0)},100);
// setTimeout(()=>{
//     console.log(1);
//     setTimeout(()=>{
//         console.log(2);
//         setTimeout(()=>{
//             console.log(3);   
//         },1000)
//     },1000)
// },1000);

setTimeout(()=>{console.log("이건 몇초일까요?")
    setTimeout(()=>{console.log("이거는 몇초같아요?")
        setTimeout(()=>{console.log("내가그랬스빈다.")},1000);
    },3000)
},3000);