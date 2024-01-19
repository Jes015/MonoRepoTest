import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString({ message: 'El titulo debe ser texto' })
  @IsNotEmpty({ message: 'El titulo esta vacío' })
  title: string;
  @IsString({ message: 'El content debe ser texto' })
  @IsNotEmpty({ message: 'El content esta vacío' })
  content: string;
}
