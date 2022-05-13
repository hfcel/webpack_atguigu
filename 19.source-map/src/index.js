import './iconfont.css'
import print from './print.js'
console.log('index.js updated')
print()
if(module.hot){
    module.hot.accept('./print.js',function(){
        print();
    })
}