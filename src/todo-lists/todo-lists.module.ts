import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListsService } from './todo-lists.service';
import { TodoListsController } from './todo-lists.controller';

import { ToDo, ToDoSSchema } from './todo-lists.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ToDo.name, schema: ToDoSSchema }]),
  ],
  controllers: [TodoListsController],
  providers: [TodoListsService],
  exports: [],
})
export class TodoListsModule {}


