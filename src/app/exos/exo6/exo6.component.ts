import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-exo6',
  templateUrl: './exo6.component.html',
  styleUrls: ['./exo6.component.scss']
})

export class Exo6Component implements OnInit {
  
  idBook!: number;
  bookName: string = '';
  
  newBook!: Book;

  constructor(
    public listService: ListService
  ){}

  ngOnInit() {
    // this.newBook = this.listService.newBook;
    this.bookName = this.listService.bookName;
  }

  addBook() {
    this.listService.addNewBook(this.idBook, this.bookName);
    this.bookName = '';
  }

}
