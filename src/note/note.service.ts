import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schema/note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private readonly noteModel: Model<Note>) {}

    createNote (createNoteDto: CreateNoteDto): Promise<Note> {
        const createdNote = new this.noteModel(createNoteDto);
        return createdNote.save();
    }
}
