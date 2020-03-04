import React, {useEffect, useState} from 'react';
import Chefs from './chefs';
import Recipes from './recipes';
import axios from 'axios';
console.log( 'App file loaded');

const App = ()=> {

    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect( ()=>{
        axios.get('/api/chefs')
            .then( data => setChefs(data.data))
            .catch( ex => console.log(ex));
        axios.get('./api/recipes')
            .then( data => setRecipes(data.data))
            .catch( ex => console.log(ex));

    }, [])

    return (
        <div>
            <h1>React App Loaded</h1>
            <Chefs chefs = {chefs}  />
            <Recipes recipes = {recipes} />

        </div>
    )
}

export default App;