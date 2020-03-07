import React, {useEffect, useState} from 'react';
import Chefs from './chefs';
import Recipes from './recipes';
import axios from 'axios';
import CreateChef from './CreateChef';
import CreateRecipe from './CreateRecipe';

console.log( 'App file loaded');

const App = ()=> {

    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        axios.get('/api/chefs')
            .then( (res) => setChefs(res.data))
            .catch( ex => console.log(ex));
        axios.get('./api/recipes')
            .then( res => setRecipes(res.data))
            .catch( ex => console.log(ex));


    }, [])
 
    return (
        <div>
         
            <Chefs chefs = {chefs} setChefs ={setChefs} recipes = {recipes} />
            <Recipes recipes = {recipes} chefs = {chefs} setRecipes = {setRecipes}/>
            <CreateChef chefs = {chefs} setChefs = {setChefs} />
            <CreateRecipe recipes = {recipes} setRecipes = {setRecipes} chefs = {chefs} setChefs = {setChefs} />

        </div>
    )
}

export default App;