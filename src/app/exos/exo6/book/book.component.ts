import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../exo6.component';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() idBookChildren: number = 0;
  // @Input() bookChildren: Book = { title: "Titre du livre" };
  @Input() bookChildren: Book = { id: 0, title: "Titre du livre" };


  @Output() sayBookToDelete: EventEmitter<Book> = new EventEmitter<Book>();

  sendBookToDelete(bookChildren: Book) {
    this.sayBookToDelete.emit(bookChildren);
  }
  
}
