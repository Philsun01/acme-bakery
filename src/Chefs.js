import React from 'react';
import axios from 'axios';

const Chefs = ({chefs, setChefs, recipes})=> {

    const destroy = (id) =>{
        axios.delete(`/api/chefs/${id}`)
            .then( ()=> setChefs(chefs.filter( chef => chef.id !== id)))
            .catch(ex=>console.log(ex))
    };

    return(
        <div className='container-sm d-flex justify-content-start flex-column' >
            <h2> Chefs <span className='badge badge-primary badge-pill'>{chefs.length}</span></h2>
            <ul className='list-group'>
            { 

                chefs.map( chef => {

                    return (
                        
                        <li key={chef.id} className='list-group-item list-group-item-primary text-wrap'>
                            <div className='d-flex justify-content-between'>
                                <a href={`#view=chef&id=${chef.id}`} className='chef'>{chef.name}</a>
                                
                                <button className = 'close' aria-label="Close" onClick = {()=>destroy(chef.id)}>X</button>
                                
                            </div>
                            <ul>
                                {
                                recipes.filter( recipe => recipe.chefId === chef.id)
                                    .map(recipe => {
                                        return (
                                            <li className = 'list-group-item list-group-item-light text-wrap' key = {recipe.id}>
                                               {recipe.name} 
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
};

export default Chefs;