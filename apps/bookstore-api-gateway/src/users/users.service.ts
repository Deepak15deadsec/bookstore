import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findAll(){
        return 'mock findall response'
    }
}
