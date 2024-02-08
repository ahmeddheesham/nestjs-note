import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Note extends Document {
  // @ApiProperty({required: true})
  @Prop({ required: true })
  title: string;

  // @ApiProperty({required: true})
  @Prop({ required: true })
  description: string;

  // @ApiProperty({required: true})
  @Prop()
  image: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
