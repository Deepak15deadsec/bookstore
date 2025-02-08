import { Test, TestingModule } from '@nestjs/testing';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';

describe('BookstoreApiGatewayController', () => {
  let bookstoreApiGatewayController: BookstoreApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookstoreApiGatewayController],
      providers: [BookstoreApiGatewayService],
    }).compile();

    bookstoreApiGatewayController = app.get<BookstoreApiGatewayController>(BookstoreApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookstoreApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
