import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

import type { AllDataRO } from 'src/shared/shared.types';
import { ToDo } from './todo-lists.schema';

const tmpPage = 1;
const tmpLimit = 20;


@Injectable()
export class TodoListsService {
 constructor(@InjectModel(ToDo.name) private toDoModel: Model<ToDo>) {}
  
  create(createTodoListDto: CreateTodoListDto) {
    const createdTodo = new this.toDoModel(createTodoListDto);
    return createdTodo.save();
  }

  async findAll(): Promise<AllDataRO<ToDo>> {
     const skip = (tmpPage - 1) * tmpLimit;

     const todos = await this.toDoModel.find().skip(skip).limit(tmpLimit).exec();

     return {
       data: todos,
       meta: {
         total: await this.toDoModel.countDocuments().exec(),
         page: tmpPage,
         limit: tmpLimit,
       },
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
