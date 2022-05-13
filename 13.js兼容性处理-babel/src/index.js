const add=(a,b)=>a+b;
console.log(add(1,2))
const promise=new Promise(resolve=>{
    setTimeout(() => {
        console.log('time up');
        resolve();
    }, 10000);
});