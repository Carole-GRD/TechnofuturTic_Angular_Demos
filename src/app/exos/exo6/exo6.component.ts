import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})

export class Exo6Component implements OnInit {
  

  bookName: string = '';

  books: Book[] = [];

  constructor(
    public bookService: BookService
  ){}

  ngOnInit() {
    // this.newBook = this.listService.newBook;
    this.books = this.bookService.books;
  }

  addBook() {
    this.bookService.addNewBook(this.bookName);
    if (this.bookName) {

      this.bookName = '';
    }
  }

}
