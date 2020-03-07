import React, {useState} from 'react';
import axios from 'axios';



const CreateChef = ({chefs, setChefs})=>{

    const [newChef, setNewChef] = useState('New Chef Name');
    const [error, setError] = useState('');
    const onSubmit = (ev) => {
        ev.preventDefault();
        axios.post('./api/chefs', {name: newChef})
            .then(res => setChefs([res.data, ...chefs]))

            .catch(ex=>console.log(ex));
    };

    return (
        <div className='card'>
            <h2>Add New Chef</h2>
             <form onSubmit = {onSubmit}>
                <div className = 'form-group'>
                    <label>Name</label>
                    <input className = 'form-control-sm'
                    type = 'text' 
                    value = {newChef}
                    onChange = {ev => setNewChef(ev.target.value)} ></input>
                </div>
               
                
                <button className='btn btn-primary'>Add New Chef </button>

            </form>
        </div>
    );
};

export default CreateChef;