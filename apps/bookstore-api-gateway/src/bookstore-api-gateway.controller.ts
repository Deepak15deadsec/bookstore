import { Controller, Get } from '@nestjs/common';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';

@Controller()
export class BookstoreApiGatewayController {
  constructor(private readonly bookstoreApiGatewayService: BookstoreApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.bookstoreApiGatewayService.getHello();
  }
}
