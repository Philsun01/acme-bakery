import React, {useState} from 'react';
import axios from 'axios';

const CreateRecipe = ({recipes, chefs, setRecipes})=> {

    const [newRecipe, setNewRecipe] = useState('');
    const [chefId, setChefId] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log(ev.target.value);
        console.log({name: newRecipe, chefId});
        axios.post('./api/recipes', {name: newRecipe, chefId})
            .then(res => {
                console.log(res.data);
                setRecipes([res.data, ...recipes]);
                setChefId('');
            })
            .catch(ex=>console.log(ex));
    };

    return (
        <div className='card container-sm'>
            <h2>Add New Recipe</h2>
             <form onSubmit = {onSubmit}>
                 <select value = {chefId} onChange = {ev => setChefId(ev.target.value)}>
                     <option> -- Choose a chef --</option>
                     {
                         chefs.map(chef=>{
                             return(
                                <option value={chef.id} key={chef.id} onChange = {ev => setChefId(ev.target.value)}>{chef.name}</option>
                             )
                         })
                     }
                 </select>
                <div className = 'form-group'>
                    <input className = 'form-control-sm'
                    type = 'text' 
                    value = {newRecipe}
                    onChange = {ev => setNewRecipe(ev.target.value)} ></input>
                </div>
               
                
                <button disabled = {!chefId} className='btn btn-primary'>Add New Recipe </button>

            </form>
        </div>
    )
}

export default CreateRecipe;