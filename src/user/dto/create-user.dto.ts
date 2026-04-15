import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username?: string;

  @IsEmail()
  email?: string;

  @MinLength(6)
  password?: string;
}
