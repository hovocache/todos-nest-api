
import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
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

  async findAll(page: number, limit: number): Promise<AllDataRO<ToDo>> {
     const skip = (page - 1) * limit;

     const todos = await this.toDoModel.find().skip(skip).limit(limit).exec();

     return {
       data: todos,
       meta: {
         total: await this.toDoModel.countDocuments().exec(),
         page: page,
         limit: limit,
       },
     };
  }

  async findOne(id: number) {
    const todo = await this.toDoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    const todo = await this.toDoModel.findByIdAndUpdate(id, updateTodoListDto, { new: true }).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async remove(id: number) {
    const todo = await this.toDoModel.findByIdAndDelete(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }
}
