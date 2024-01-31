import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [NoteModule, MongooseModule.forRoot('mongodb+srv://ahmeddheesham:Ah12345@brngit.ba0zymo.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
