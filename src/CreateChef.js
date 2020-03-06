import React, {useState} from 'react';
import axios from 'axios';

const CreateChef = ()=>{

    const [newChef, setNewChef] = useState[{}];

    return (
        <div>
            <form>
                <label>Add new Chef</label>
                <input></input>

            </form>
            This is the CreateChef form
        </div>
    )
};

export default CreateChef;