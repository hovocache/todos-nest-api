import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


async function run() {
  await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`);

await mongoose.connection.collection('todos').updateMany(
  {
    $or: [
      { status: { $exists: false } },
      { initiator: { $exists: false } },
      { performer: { $exists: false } },
      { reviewers: { $exists: false } },
    ]
  },
  {
    $set: {
      status: 'new',
      initiator: null,
      performer: null,
      reviewers: [],  
    }
  }
);

  console.log('Todos migration complete');

  await mongoose.disconnect();
}

run();
// To run this migration, use the command: node src/migrations/todos.ts