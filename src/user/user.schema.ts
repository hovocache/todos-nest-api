import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { USER_ROLES } from 'src/shared/shared.constants';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  username?: string;

  @Prop({
    required: true,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.USER,
  })
  role: string;

  @Prop({ default: Date.now })
  lastLoginedAt: Date;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
