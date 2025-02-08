import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id:1,
      firstName:'John',
      lastName:'Doe',
      age:25,
    },
    {
      id:2,
      firstName:'Jane',
      lastName:'Doe',
      age:24,
    },
  ];

  findAll(){
    return this.users;
  }
}
