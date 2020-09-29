const homepage = (req, res)=>{
    // const data =[
    //     {
    //         name:"Homepage",
    //         message: "this is SubName",
    //         description: "some quik"
    //     }
    //     {
    //         name:"Homepage",
    //         message: "this is SubName",
    //         description: "some quik"
    //     }   
    // ]
 const data  ={
            name:"Homepage",
            message: "this is SubName",
            description: "some quik"
 }
   
    res.render('homepage',data)
}
const about = (req, res)=>{
    res.send('<h1>about</h1>')
}
const contact = (req, res)=>{
    res.send('<h1>contact</h1>')
}
module.exports ={

    homepage,
    about,
    contact
}
