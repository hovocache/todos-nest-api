import mongoose from 'mongoose';

async function run() {
  await mongoose.connect(`mongodb://localhost:27017/todosDB`);
  await mongoose.connection.collection('todos').updateMany(
    { status: { $exists: false } },
    { $set: { status: 'new' } }
  );

  console.log('Todos migration complete');

  await mongoose.disconnect();
}

run();
// To run this migration, use the command: node src/migrations/todos.ts