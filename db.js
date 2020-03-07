const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_bakery');

client.connect();

const sync = async() => {
    const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS recipes;
        DROP TABLE IF EXISTS chefs;
        CREATE TABLE chefs(
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name VARCHAR(100)
        );
        CREATE TABLE recipes (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            "chefId" UUID REFERENCES chefs(id),
            name VARCHAR(100)
        );
        INSERT INTO chefs(name) values('Moe');
        INSERT INTO chefs(name) values('Larry');
        INSERT INTO chefs(name) values('Sam');
        INSERT INTO recipes("chefId", name) values(
            (SELECT id FROM chefs WHERE name = 'Larry'),
            'Pot Roast');
        INSERT INTO recipes("chefId", name) values(
            (SELECT id FROM chefs WHERE name = 'Moe'),
            'Chicken Pot Pie');
        INSERT INTO recipes("chefId", name) values(
            (SELECT id FROM chefs WHERE name = 'Sam'),
            'Pizza');

    `;

    await client.query(SQL);
}

const readChefs = async() => {
    return (await client.query('SELECT * FROM chefs')).rows;
}

const readRecipes = async() => {
    return (await client.query('SELECT * FROM recipes')).rows;
}

const createChef = async(chef) => {
    const SQL = `INSERT INTO chefs(name) values($1) returning *`;
    return (await client.query(SQL,[chef.name])).rows[0];
}

const createRecipe = async(recipe) => {
    const SQL = `INSERT INTO recipes(name, "chefId") values($1, $2) returning *`;
    return (await client.query(SQL,[recipe.name, recipe.chefId])).rows[0];
}

const destroyChef = async(chefId) => {
    await client.query(`DELETE FROM recipes WHERE "chefId" = $1`,[chefId]);
    const SQL = `DELETE FROM chefs WHERE id = $1`;
    return (await client.query(SQL, [chefId]))
}

const destroyRecipe = async(recipeId) => {
    
    const SQL = `DELETE FROM recipes WHERE id = $1`;
    return (await client.query(SQL, [recipeId]))
}

module.exports = {
    sync,
    readChefs,
    readRecipes,
    createChef,
    destroyChef,
    createRecipe,
    destroyRecipe
}
