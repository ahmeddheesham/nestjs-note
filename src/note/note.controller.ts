import { Body, Controller, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { Note } from './schema/note.schema';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Post()
    create (@Body() createNoteDto: CreateNoteDto): Promise<Note> {
        return this.noteService.createNote(createNoteDto);
    }
}
