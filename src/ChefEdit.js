import React, {useState, useEffect} from 'react';

const ChefEdit = ({updateChef, chef})=> {
    const [name, setName] = useState('');

    useEffect( ()=> {
        console.log(chef);
        if(chef.id){
            setName(chef.name);
        }
    },[chef])

    const onSubmit = (ev) => {
        ev.preventDefault();
        updateChef({...chef, name});
    };
    

    return (
        <div>
            <h2>Chef Edit Form</h2>
            <form onSubmit={onSubmit}>
                <div className = 'form-group'>
                    <label>Name</label>
                    <input className = 'form-control-sm' type = 'text' value = {name}
                    onChange = {ev => setName(ev.target.value)} ></input>
                </div>
                <button className='btn btn-primary'>Edit Chef Name </button>
            </form>
            <a href='#'>Cancel</a>
        </div>

    )

}

export default ChefEdit;