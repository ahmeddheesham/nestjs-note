import { Body, Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';
import { Note } from './schema/note.schema';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { NoteResponseDto } from './dto/note-response.dto';

@Controller('note')
export class NoteController {
    constructor(private readonly noteService: NoteService){}

    @Post()
    @ApiCreatedResponse({type: NoteResponseDto})  // Swagger Response 
    @ApiConsumes('multipart/form-data')  // to send Data and upload fiels with Swagger
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: "./uploads",
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`)
            }
        })
    }))


    create ( 
        @Body() createNoteDto: CreateNoteDto ,
        @UploadedFile() file: Express.Multer.File 
        ): Promise<NoteResponseDto> {
        // console.log(file)
        // console.log(createNoteDto)
        return this.noteService.createNote(createNoteDto, file.path);
    };

}



    

