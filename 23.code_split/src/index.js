// import {add} from './test'
console.log('index.js')
// console.log(add(1,2))
import(/*webpackChunkName:'kkk'*/'./test').then((data)=>{
    console.log(data)
}).catch(()=>{
    console.log('load file fail')
})