import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto as ClientCreateBookDto } from '@app/contracts/books/create-book.dto';
import { UpdateBookDto as ClientUpdateBookDto } from '@app/contracts/books/update-book.dto';
import { BookDto as ClientBookDto } from '@app/contracts/books/book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Books_Patterns } from '@app/contracts/books/book.pattern';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';
import { map } from 'rxjs';

@Injectable()
export class BooksService {
constructor(@Inject('BOOKS_CLIENT') private booksClient: ClientProxy) {}

private mapBookDto(bookDto: ClientBookDto): BookDto{
  return{
    id: bookDto.id,
    title: bookDto.title,
  }
}

  create(createBookDto: CreateBookDto) {
    return this.booksClient.send<ClientBookDto, ClientCreateBookDto>(
      Books_Patterns.CREATE,
      createBookDto,
    ).pipe(map(this.mapBookDto))
  }

  findAll() {
    return this.booksClient.send<ClientBookDto>(Books_Patterns.FIND_ALL,{});
  }

  findOne(id: number) {
    return this.booksClient.send<ClientBookDto>(Books_Patterns.Find_ONE,{
      id,
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send<ClientBookDto, ClientUpdateBookDto>(
      Books_Patterns,
      {
        id,
        ...updateBookDto
      }
    )
  }

  remove(id: number) {
    return this.booksClient.send<ClientBookDto>(Books_Patterns.REMOVE, {id});
  }
}
