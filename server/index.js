import path from 'path';
import { dirname } from 'dirname-filename-esm';
import knex from 'knex';

/**
 * @type {knex}
 */
const database = knex({
    client: 'pg',
    debug: true,
    connection: {
        host: 'localhost',
        port: 25432,
        user: 'app',
        password: 'app',
        database: 'defaultdb',
    },
    migrations: {
        directory: path.join(dirname(import.meta), 'migrations'),
        disableTransactions: true,
    },
});

database.migrate.latest();

export default database;
