// function func1(callback){
//     setTimeout(()=>{
//         console.log(1);
//         void func2();
//     },1000);
// }
// function func2(callback){
//     setTimeout(()=>{
//         console.log(2);
//         void func3();
//     },1000);
// }
// function func3(callback){
//     setTimeout(()=>{
//         console.log(3);
//         void func4();
//     },1000);
// }
// function func4(callback){
//     setTimeout(()=>{
//         console.log(4);
//         setTimeout(()=>{console.log("끝")},1000)
//     },1000);
// }
// function func5(callback){
//     setTimeout(()=>{
//         console.log("끝");
//     },1000);
// }

// void func1();

function func1(callback){
    setTimeout(()=>{
        console.log(1);
        callback();
    },1000);
}
function func2(callback){
    setTimeout(()=>{
        console.log(2);
        callback();
    },1000);
}
function func3(callback){
    setTimeout(()=>{
        console.log(3);
        callback();
    },1000);
}
function func4(callback){
    setTimeout(()=>{
        console.log(4);
        callback();
    },1000);
}

func1(()=>{
    func2(()=>{
        func3(()=>{
            func4(()=>{
                setTimeout(()=>{
                    console.log("끝");
                },1000);
            });
        });
    });
});