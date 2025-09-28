import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();




export default async function toDoMigrateUp() {
  await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`);

  const todosCollection = mongoose.connection.collection('todos') as any;

await todosCollection.updateMany(
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


