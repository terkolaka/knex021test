import knex from 'knex';

const emptyUUID4 = '00000000-0000-0000-0000-000000000000';

/**
 * @param {knex} db
 */
export function down(db) {
    return db.schema.dropTableIfExists('device');
}

export function up(db) {
    return db.schema.createTable('device', (table) => {
        table.uuid('id').notNullable().defaultTo(emptyUUID4).primary();
        table.string('host', 15).notNullable().defaultTo('');
        table.dateTime('created_at', { useTz: false });
        table.string('name', 20);
    });
}
