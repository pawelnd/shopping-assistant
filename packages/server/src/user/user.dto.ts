import { IsString, ValidateNested, IsOptional } from 'class-validator';
import CreateAddressDto from './address.dto';

class CreateUserDto {
  @IsString()
  public name: string;

  @IsString()
  public email: string;

  @IsOptional()
  @ValidateNested()
  public address?: CreateAddressDto;
}

export { CreateUserDto };
