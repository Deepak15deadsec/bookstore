import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { CreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto } from '@app/contracts/books/update-book.dto';
import { Books_Patterns } from '@app/contracts/books/book.pattern';


@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(Books_Patterns.CREATE)
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(Books_Patterns.FIND_ALL)
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern(Books_Patterns.Find_ONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(Books_Patterns.UPDATE)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(Books_Patterns.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
