const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');

app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/api/chefs', (req, res, next)=>{
    db.readChefs()
        .then(data => res.send(data))
        .catch(next);
});

app.post('/api/chefs', (req, res, next)=> {
    db.createChef(req.body)
        .then(data => res.send(data))
        .catch(next);
});

app.post('/api/recipes', (req, res, next)=> {
    db.createRecipe(req.body)
        .then(data => res.send(data))
        .catch(next);
});

app.delete('/api/chefs/:id', (req, res, next) => {
    console.log('deleting');
    console.log(req.params.id);
    db.destroyChef(req.params.id)
        .then( ()=> res.sendStatus(204))
        .catch(next);
})

app.get('/api/recipes', (req, res, next)=>{
    db.readRecipes()
        .then( data => res.send(data))
        .catch(next);
})

const port = process.env.PORT || 3000;
db.sync()
    .then( ()=> {
        app.listen(port, ()=> console.log(`listening on ${port}`));
    });




