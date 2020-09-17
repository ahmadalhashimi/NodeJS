//npm init -y
//npm i express
//npm i -D express // to stope

const express = require('express')
const path = require('path')

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));