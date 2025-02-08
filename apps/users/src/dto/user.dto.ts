import { IsInt, IsString } from 'class-validator';

export class UserDto {
  @IsInt()
  id: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsInt()
  age: number;
}
