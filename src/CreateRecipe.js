import React, {useState} from 'react';
import axios from 'axios';

const createRecipe = ({recipes, setRecipes, chefs})=> {

    const [newRecipe, setNewRecipe] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        axios.post('./api/recipes', {name: newRecipe, chefId: chefs[0].id})
            .then(res => {
                console.log(res.data);
                setRecipes([res.data, ...recipes]);
            })
            .catch(ex=>console.log(ex));
    };

    return (
        <div className='card'>
            <h2>Add New Recipe</h2>
             <form onSubmit = {onSubmit}>
                <div className = 'form-group'>
                    <label>Name</label>
                    <input className = 'form-control-sm'
                    type = 'text' 
                    value = {newRecipe}
                    onChange = {ev => setNewRecipe(ev.target.value)} ></input>
                </div>
               
                
                <button className='btn btn-primary'>Add New Recipe </button>

            </form>
        </div>
    )
}

export default createRecipe;