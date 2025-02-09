import { Module } from '@nestjs/common';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookstoreApiGatewayController],
  providers: [BookstoreApiGatewayService],
})
export class BookstoreApiGatewayModule {}
