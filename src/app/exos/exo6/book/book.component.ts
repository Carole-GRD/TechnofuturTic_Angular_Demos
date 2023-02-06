import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../exo6.component';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  // "!" permet de ne pas devoir initialiser la variable
  // on dit à Typescript de nous faire confiance, qu'il y aura bien des données dedans


  // @Input() idBookChildren: number = 0;
  @Input() idBookChildren!: number;


  // @Input() bookChildren: Book = { title: "Titre du livre" };
  // @Input() bookChildren: Book = { id: 0, title: "Titre du livre" };
  @Input() bookChildren!: Book;


  // Faire réagir le parent (exo6) 
  // en fonction de ce qu’il se passe dans l’enfant (book)
  // via des "EventEmitter"
  @Output() sayBookToDelete: EventEmitter<Book> = new EventEmitter<Book>();
  // -> l'EventEmitter DOIT être initialisé !

  sendBookToDelete(bookChildren: Book) {
    this.sayBookToDelete.emit(bookChildren);
  }
  
}
