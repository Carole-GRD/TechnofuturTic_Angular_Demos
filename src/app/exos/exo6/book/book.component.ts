import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from '../../services/list.service';






@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit{

  idBook!: number;
  bookName: string = '';

  constructor(
    public listService: ListService
  ){}

  ngOnInit() {
    this.bookName = this.listService.bookName;
    this.idBook = this.listService.idBook;
  }

  deleteBook(eventId: number) {
    this.listService.deleteOneBook(eventId);
  }
  
}
