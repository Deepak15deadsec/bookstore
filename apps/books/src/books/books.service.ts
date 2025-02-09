import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BooksService {
private books:BookDto[] = [
  {
    id:1,
    title: 'Title 1',
    author: 'Author 1',
    rating: 3.9,
  },
  {
    id:2,
    title : 'Title2',
    author:'Author 2',
    rating: 4.7,
  },
];

  create(createBookDto: CreateBookDto) {
    const newbook: BookDto = {
      ...createBookDto,
      id: this.books.length + 1,
    };

    this.books.push(newbook);
    return newbook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
