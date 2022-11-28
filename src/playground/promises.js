const promise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        // resolve({name: 'Mike Amon',
        // age:30,
        // isSingle:false,
        // location:{
        //     city:'Cherry Hill',
        //     country:'USA'
        // }})
        reject('this promise is rejected')
    },3000)
    
})
console.log('before')
promise.then((data)=>{
    console.log(data)
}).catch((error)=>{console.log(error)})

console.log('after')