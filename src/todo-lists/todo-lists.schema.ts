
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type ToDoDocument = HydratedDocument<ToDo>;

@Schema()
export class ToDo {
    
  @Prop()
  title: string;

  @Prop()
  description?: string;

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
