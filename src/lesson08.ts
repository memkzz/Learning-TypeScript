let data={
    name:"jr",
    age:23,
    status:"A",
    ola:()=>{console.log("ola")},
    info:(p:string)=>{console.log(p)}
}
console.log(data);
data.ola();
data.info("bye");