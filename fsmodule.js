const fs=require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt')
// console.log(a.toString())
// console.log("finish reading file")
// const a=fs.writeFile('file2.txt','this is a data',()=>{
//     console.log("written to file")
// })
b=fs.writeFileSync('file2.txt','this is a data2')
console.log(b)
console.log("finish reading file")