function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b);
}
calculator(1,2,sum);


//setimeout function
// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello,3000);   //3sec=3000milisec