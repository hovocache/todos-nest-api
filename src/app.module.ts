import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListsModule } from './todo-lists/todo-lists.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import dotenv from 'dotenv'

dotenv.config();

@Module({
  imports: [
        ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
        MongooseModule.forRoot(process.env.MONGO_DB_URI ||'mongodb://localhost:27017',
          {dbName: process.env.MONGO_DB_NAME}),
        TodoListsModule,
        UserModule,
        AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
