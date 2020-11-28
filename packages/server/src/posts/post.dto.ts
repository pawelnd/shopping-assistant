import { IsString, Equals, IsNotEmpty } from 'class-validator';

class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  public content: string;

  @IsString()
  @IsNotEmpty()
  public title: string;
}

export default CreatePostDto;
