import React, {useEffect, useState} from 'react';
import Chefs from './chefs';
import Recipes from './recipes';
import ChefEdit from './ChefEdit';
//import RecipeEdit from './RecipeEdit';
import axios from 'axios';
import qs from 'qs';
import CreateChef from './CreateChef';
import CreateRecipe from './CreateRecipe';

const App = ()=> {

    const [chefs, setChefs] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [params, setParams ] = useState(qs.parse(window.location.hash.slice(1)));

    useEffect(()=> {
        console.log(params);
      window.addEventListener('hashchange', ()=> {
        setParams(qs.parse(window.location.hash.slice(1)));
        console.log(qs.parse(window.location.hash.slice(1)))
      });
    }, []);
  
    const { view } = params;
    console.log(`Current View is ${view}`);

    const updateChef = async(chef) => {
        const updated = (await axios.put(`/api/chefs/${chef.id}`,chef)).data;
        setChefs([updated, ...chefs.filter(chef=>chef.id!==updated.id)]);
    }

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
            <h1><a href={'#view=home'}> Acme Recipes</a></h1> 
             
            {view === 'chef' && <ChefEdit updateChef = {updateChef} chef = {chefs.find(chef=>chef.id===params.id)}/>}
            
            { 
                view === undefined &&
                <div className=' d-flex justify-content-around'>
                    <div className='card-container'>
                        <CreateChef chefs = {chefs} setChefs = {setChefs} />
                        <Chefs chefs = {chefs} setChefs ={setChefs} recipes = {recipes} />
                    </div>
                    <div className='card-container'>
                        <CreateRecipe recipes = {recipes} setRecipes = {setRecipes} chefs = {chefs} setChefs = {setChefs} />
                        <Recipes recipes = {recipes} chefs = {chefs} setRecipes = {setRecipes}/>
                    </div>
                </div>
            }
        </div>
    )
}

export default App;