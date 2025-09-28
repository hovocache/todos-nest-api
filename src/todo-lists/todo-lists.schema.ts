
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { TODO_STATUS_TYPES } from './todo-lists.constants';

export type ToDoDocument = HydratedDocument<ToDo>;

@Schema()
export class ToDo {
    
  @Prop({required: true})
  title: string;

  @Prop()
  description?: string;

  @Prop({required: true, default: 'TEST2'})
  test2: string;

  @Prop({
    required: true,
    enum: Object.values(TODO_STATUS_TYPES),
    default: TODO_STATUS_TYPES.NEW,
  })
  status: string;

@Prop({ type: Types.ObjectId, ref: 'User', default: null })
  initiator: Types.ObjectId;

@Prop({ type: Types.ObjectId, ref: 'User', default: null })
  performer: Types.ObjectId;

@Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  reviewers: Types.ObjectId[];

@Prop({ default: Date.now })
  createdAt: Date;

 @Prop({ default: Date.now })
  updatedAt: Date;
}


export const ToDoSSchema = SchemaFactory.createForClass(ToDo);

ToDoSSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});
