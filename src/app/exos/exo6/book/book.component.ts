import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  idBook!: number;
  bookName: string = '';

  constructor(
    public bookService: BookService
  ){}

  @Input() book!: Book;

  ngOnInit() {
    this.bookName = this.bookService.bookName;
    this.idBook = this.bookService.idBook;
  }

  deleteBook(eventId: number) {
    this.bookService.deleteOneBook(eventId);
  }
  
}
