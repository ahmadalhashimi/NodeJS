const fs = require('fs')
fs.readFile('./files/test.json', (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
let text = {
    "user": "sam",
    "email": "aaa@gmail.com",
    "address": "Riders"
}