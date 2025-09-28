// To run migrations, use the command: ts-node src/migrations/index.up.ts

import toDoMigrateUp from './todos/todos.up';

async function runMigrations() {
    await toDoMigrateUp();
}

runMigrations();