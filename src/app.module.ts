import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListsController } from './todo-lists/todo-lists.controller';
import { TodoListsService } from './todo-lists/todo-lists.service';
import { TodoListsModule } from './todo-lists/todo-lists.module';

@Module({
  imports: [
        ConfigModule.forRoot({
      isGlobal: true, // делает ConfigModule доступным во всех модулях
    }),
        TodoListsModule,
  ],
  controllers: [AppController, TodoListsController],
  providers: [AppService, TodoListsService],
})
export class AppModule {}
