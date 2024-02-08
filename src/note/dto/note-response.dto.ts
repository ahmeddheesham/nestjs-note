import { ApiProperty } from "@nestjs/swagger";

export class NoteResponseDto {
    @ApiProperty({required: true})
    _id: string 


    @ApiProperty({required: true})
    name: string

    @ApiProperty({required: true})
    image: string
}