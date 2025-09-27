import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListsController } from './todo-lists/todo-lists.controller';
import { TodoListsService } from './todo-lists/todo-lists.service';
import { TodoListsModule } from './todo-lists/todo-lists.module';

@Module({
  imports: [
        ConfigModule.forRoot({
      isGlobal: true,
    }),
        MongooseModule.forRoot(process.env.MONGO_DB_URI ||'mongodb://localhost:27017',
          {dbName: process.env.MONGO_DB_NAME || 'todosDB'}),
        TodoListsModule,
  ],
  controllers: [AppController, TodoListsController],
  providers: [AppService, TodoListsService],
})
export class AppModule {}
