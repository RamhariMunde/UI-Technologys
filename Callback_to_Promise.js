/** this is a callback to promise conversion in javaScript */


// setTimeout(() => {
//     console.log('hello');
// },2000);

function setT(f,t){
let p = new Promise((resolve,reject) =>{
    setTimeout(() => {
     f();
        resolve()
    },t);
})
return p}

setT(() =>{
    console.log('promise');
},1000).then(() => {
    console.log('completed')
})
