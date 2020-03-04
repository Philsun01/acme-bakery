import React from 'react';

const Recipes = ({recipes}) => {
    return (
        <div> 
            <h1> Recipe Names Here</h1>
            <ul>
            {
            recipes.map(recipe => {
                return(
                    <li key = {recipe.id}>
                        {recipe.name}
                    </li>
                );
            })
            }
            </ul>
        </div>
    )
};

export default Recipes;

