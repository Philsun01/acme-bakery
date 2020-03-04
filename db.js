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
            chef UUID REFERENCES chefs(id),
            name VARCHAR(100)
        );
        INSERT INTO chefs(name) values('Moe');
        INSERT INTO chefs(name) values('Larry');
        INSERT INTO chefs(name) values('Sam');
        INSERT INTO recipes(chef, name) values(
            (SELECT id FROM chefs WHERE name = 'Larry'),
            'Pot Roast');
        INSERT INTO recipes(chef, name) values(
            (SELECT id FROM chefs WHERE name = 'Moe'),
            'Chicken Pot Pie');
        INSERT INTO recipes(chef, name) values(
            (SELECT id FROM chefs WHERE name = 'Sam'),
            'Pizza');

    `;

    client.query(SQL);
}

const test = ()=> {
    console.log("DB LINKED")
}

module.exports = {
    sync,
    test
}
