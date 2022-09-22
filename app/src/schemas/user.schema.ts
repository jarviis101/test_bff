import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    _id: mongoose.Types.ObjectId;
    @Prop({ required: true })
    name: string;
    @Prop({ unique: true, required: true })
    email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);