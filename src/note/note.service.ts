import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schema/note.schema';
import { Model } from 'mongoose';
import { NoteResponseDto } from './dto/note-response.dto';

@Injectable()
export class NoteService {
    constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

    async createNote(createNoteDto: CreateNoteDto, image: string): Promise<NoteResponseDto> {
        const createdNote = await new this.noteModel({ ...createNoteDto, image }).save();
        return {
            _id: createdNote._id,
            name: createdNote.title,
            image: buildImageUrl(createdNote.image)
        }
    }
}

function buildImageUrl(path: string): string {
    return  "http:localhost:3000/" + path
}