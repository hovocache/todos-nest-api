import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

import type { ToDo } from './todo-lists.types';
import type { AllDataRO } from 'src/shared/shared.types';

@Injectable()
export class TodoListsService {
  create(createTodoListDto: CreateTodoListDto) {
    return 'This action adds a new todoList';
  }

  async findAll(): Promise<AllDataRO<ToDo>> {
    return {
      data: [
        { id: 1, title: 'First Todo', description: 'This is the first todo', createdAt: new Date(), updatedAt: new Date() },
        { id: 2, title: 'Second Todo', description: 'This is the second todo', createdAt: new Date(), updatedAt: new Date() },
        { id: 3, title: 'Third Todo', description: 'This is the third todo', createdAt: new Date(), updatedAt: new Date() },
        { id: 4, title: 'Fourth Todo', description: 'This is the fourth todo', createdAt: new Date(), updatedAt: new Date() },
        { id: 5, title: 'Fifth Todo', description: 'This is the fifth todo', createdAt: new Date(), updatedAt: new Date() },
      ], meta: { limit: 20, offset: 1, total: 5 }
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} todoList`;
  }

  update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return `This action updates a #${id} todoList`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoList`;
  }
}
