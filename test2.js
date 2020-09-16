const fs = require('fs')
// console.log(fs)
// fs.mkdir('./files', (err) =>{
//     if(err){
//         console.log(err)

//     } else{
//         console.log('folder created')
//     }
// })

// fs.rmdir('./files', (err) =>{
//     if(err){
//         console.log(err)

//     } else{
//         console.log('folder remove')
//     }
// })

// if (fs.existsSync('./files')){
//     fs.rmdir('./files', (err) =>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('folder remove')
//         }
//     })
// } else{
//     fs.mkdir('./files', (err) =>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('folder add')
//         }
//     })
//}
// setInterval(() =>{
//     fs.readFile('./files/blog1.txt', (err,data) =>{
//         if(err){
//             console.log(err)
//         }else{
        
//                 let new_text = data.toString() + '\nnew Text'
//                 fs.writeFile('./files/blog1.txt', new_text, (err) =>{
//                     if(err){
//                         console.log(err)
//                     } else{
//                         console.log('Done!')
//                     }
//                 })
//                 console.log(data.toString())     
//         }
//     })
// }, 1000);
fs.opendir('./files', (err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Dir opened')
    }
})
if(fs.existsSync('./files/blog1.txt')){
    fs.readFile('./files/blog1.txt', (err,data)=>{
        if(err){
            console.log(err)
        }else{
            let new_text = data.toString() + '\n example'
            fs.writeFile('./files/blog1.txt', new_text,(err)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log('Don!')
                }
            })
        }
    })
}else{
    fs.writeFile('./files/blog1.txt', 'This is text',(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Done!')
        }
    })
}

 