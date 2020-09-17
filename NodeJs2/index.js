//npm init -y
//npm i express
//npm i -D express // to stope

const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World')
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));