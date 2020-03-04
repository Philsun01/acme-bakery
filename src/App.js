import React, {useEffect, useState} from 'react';
import Chefs from './chefs';
import Recipes from './recipes';
console.log( 'App file loaded');
const App = ()=> {

    const [chefs, setChefs] = useState([    
            {
              "id": "bdb6ecfc-2b0e-405b-bb9f-8dcc9ab44da3",
              "name": "Moe"
            },
            {
              "id": "0c320081-0a2c-4911-b65d-c2e699af9017",
              "name": "Larry"
            },
            {
              "id": "19cd6cb7-b805-4837-8890-7cf76e3eb27a",
              "name": "Sam"
            }    
    ]);
    const [recipes, setRecipes] = useState([
        {
            "id": "f67095a4-d248-453d-99a7-64e066c456ed",
            "chefId": "0c320081-0a2c-4911-b65d-c2e699af9017",
            "name": "Pot Roast"
        },
        {
            "id": "3c2a6514-017d-412d-9c28-b2fa54377c44",
            "chefId": "bdb6ecfc-2b0e-405b-bb9f-8dcc9ab44da3",
            "name": "Chicken Pot Pie"
        },
        {
            "id": "4a6c1f33-3df5-4aa5-a924-9c8529f3f611",
            "chefId": "19cd6cb7-b805-4837-8890-7cf76e3eb27a",
            "name": "Pizza"
        }
    ]);

    //console.log(recipes);

    return (
        <div>
            <h1>React App Loaded</h1>
            <Chefs chefs = {chefs}  />
            <Recipes />

        </div>
    )
}

export default App;