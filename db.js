const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

client.connect();

const sync = async() => {
    const SQL = `
    DROP TABLE IF EXISTS recipes;
    CREATE TABLE recipes (
        name VARCHAR(100);
    )
    `;

    client.query(SQL);
}

module.exports = {
    sync
}
