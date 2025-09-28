// To run  migrations, use the command: ts-node src/migrations/index.down.ts

import toDoMigrateDown from './todos/todos.down';

async function runMigrations() {
    await toDoMigrateDown();
}

runMigrations();
