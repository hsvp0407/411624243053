function example(){
    console.log("B")
}
const example1 = ()=>{
    console.log("D")
}

console.log("A")
setTimeout(example, 0)
setTimeout(example, 2000)
console.log("C")

const promise = new promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Hi")
    },100p0)
    })

promise.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})