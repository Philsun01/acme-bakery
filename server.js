const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.use('/dist', express.static(path.join(__dirname, 'assets')));

app.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

const port = process.env.PORT || 3000;
db.sync();
app.listen(port, ()=> console.log(`listening on ${port}`))



