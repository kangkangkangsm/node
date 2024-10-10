// function delay(time){
//     var promise = new Promise(
//         (resolve)=>{
//             setTimeout(resolve, time)
//         });
//     return promise;
// }
function delay(time){
    return new Promise(
        (resolve)=>{
            setTimeout(resolve, time)
        });
}

delay(1000)
    .then(()=>{
        console.log(1);
        delay(1000);
        return delay(1000);
    })
    .then(()=>{
        console.log(2);
        return delay(1000);
    })
    .then(()=>{
        console.log(3);
    })
