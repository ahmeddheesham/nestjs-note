import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { Note } from './schema/note.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Post()
    create ( @Body() createNoteDto: CreateNoteDto ): Promise<Note> {
        return this.noteService.createNote(createNoteDto);
    };


    @Post("upload")
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: "./uploads",
            filename:(req, file, cb) => {
                cb(null, `${file.originalname}`)
            }
        })
    }))

    uploadFile(@UploadedFile() file: Express.Multer.File){
        return "success";
    }
}
