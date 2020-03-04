import React from 'react';
import Chefs from './chefs';
import Recipes from './recipes';
console.log( 'App file loaded');
const App = ()=> {
    return (
        <div>
            <h1>React App Loaded</h1>
            <Chefs />
            <Recipes />

        </div>
    )
}

export default App;