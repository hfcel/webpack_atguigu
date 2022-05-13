// import {add} from './test'
console.log('index.js')
// console.log(add)
document.getElementById('btn').onclick=function(){
    import(/*webpackChunkName:'kkk'*/'./test').then(({add})=>{
        console.log(add(1,2))
        // console.log(add)
    }).catch(()=>{[
        console.log('load file error')
    ]})
}
document.getElementById('btn01').onclick=function(){
    import(/*webpackPrefetch:true*/'./tst').then(({mul})=>{
        console.log(mul(22,2))
    }).catch(()=>{
        console.log('tst error')
    })
}