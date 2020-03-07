import React from 'react';
import axios from 'axios';

const Recipes = ({recipes, chefs, setRecipes}) => {

    const findChef = (id) => {
        return chefs.find(chef => chef.id === id).name;
    };
    
    const destroy = (id) =>{
        axios.delete(`/api/recipes/${id}`)
            .then( ()=> setRecipes(recipes.filter( recipe => recipe.id !== id)))
            .catch(ex=>console.log(ex))
    };

    return (
        <div className='container-sm d-flex justify-content-start flex-column'> 
            <h1> Recipes <span className='badge badge-primary badge-pill'>{recipes.length}</span></h1>
            <ul className='list-group'>
            {
            recipes.map(recipe => {
                return(
                    <li className='list-group-item list-group-item-primary w-50' key = {recipe.id}>
                        {recipe.name} by {findChef(recipe.chefId)}
                        <button className = 'close' aria-label="Close" onClick={()=>destroy(recipe.id)}>X</button>
                    </li>
                );
            })
            }
            </ul>
        </div>
    )
};

export default Recipes;

