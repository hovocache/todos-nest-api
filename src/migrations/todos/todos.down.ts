import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function toDoMigrateDown() {
  await mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.MONGO_DB_NAME}`);

  const todosCollection = mongoose.connection.collection('todos') as any;

  await todosCollection.updateMany(
    {},
    {
      $unset: {
        test: "", 
        test2: "" 
        // ANy props need to remove
      }
    }
  );

  console.log('Todos fields removed');

  await mongoose.disconnect();
}
