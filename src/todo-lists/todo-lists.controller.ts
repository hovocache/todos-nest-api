import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TodoListsService } from './todo-lists.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';

import type { AllDataRO } from 'src/shared/shared.types';
import type { ToDo } from './todo-lists.types';

import { PAGE_SIZE_VARIATIONS } from 'src/shared/shared.constants';

@Controller('todo-list')
export class TodoListsController {
  constructor(private readonly todoListsService: TodoListsService) {}

  @Post()
  create(@Body() createTodoListDto: CreateTodoListDto) {
    return this.todoListsService.create(createTodoListDto);
  }

  @Get()
  async findAll(@Query('page') page: number, @Query('limit') limit: number): Promise<AllDataRO<ToDo>> {

    if (!page) {
      page = 1;
    }

    if (!limit || !PAGE_SIZE_VARIATIONS[limit]) {
      limit = PAGE_SIZE_VARIATIONS[20];
    }

    return this.todoListsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) { 
    return this.todoListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoListDto: UpdateTodoListDto) {
    return this.todoListsService.update(+id, updateTodoListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoListsService.remove(+id);
  }
}
