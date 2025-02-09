import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class BooksService {
constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send('books.create',createBookDto);
  }

  findAll() {
    return this.booksClient.send('books.findAll',{});
  }

  findOne(id: number) {
    return this.booksClient.send('books.findOne',id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send('books.update',{id, ...updateBookDto});
  }

  remove(id: number) {
    return this.booksClient.send('books.remove',id);
  }
}
