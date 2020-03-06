import React from 'react';

const Chefs = ({chefs})=> {

    return(
        <div>
            <h2> Chef list here</h2>
            <ul>
            {
                chefs.map( (chef)=>{
                    return (
                    <li key={chef.id}>
                        {chef.name} - ID: {chef.id}
                    </li>
                    );
                })
            }
            </ul>
        </div>
    )
};

export default Chefs;