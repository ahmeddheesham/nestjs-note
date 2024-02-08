import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { Multer } from 'multer';

export class CreateNoteDto {
  @ApiProperty({required: true})
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: 'string', format: 'binary' })  //to upload file through Swagger
  image: Express.Multer.File;
}
