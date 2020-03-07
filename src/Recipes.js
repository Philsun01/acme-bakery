import React from 'react';

const Recipes = ({recipes, chefs}) => {

    const findChef = (id) => {
        return chefs.find(chef => chef.id === id).name;
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
                        <button className = 'close' aria-label="Close" >X</button>
                    </li>
                );
            })
            }
            </ul>
        </div>
    )
};

export default Recipes;

