import React, {useState} from 'react';
import axios from 'axios';



const CreateChef = ({chefs, setChefs})=>{

    const [newChef, setNewChef] = useState('New Chef Name');
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        axios.post('./api/chefs', {name: newChef})
            .then(res => setChefs([res.data, ...chefs]))

            .catch(ex=>console.log(ex));
    };

    return (
        <div>
             <form onSubmit = {onSubmit}>
                <label>Chef Name</label>
                <input type = 'text' 
                    value = {newChef}
                    onChange = {ev => setNewChef(ev.target.value)}
                ></input>
                <button>Add New Chef </button>

            </form>
        </div>
    );
};

export default CreateChef;