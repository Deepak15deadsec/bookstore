import { Injectable } from '@nestjs/common';

@Injectable()
export class BookstoreApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
