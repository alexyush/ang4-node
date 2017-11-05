import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {

  constructor(private todosService: TodosService ) {

  }
  
  ngOnInit() {

  }
  
  countCompleted:number = this.todosService.getAllcompleted();

  deleteCompleted(event: any) {
    this.todosService.deleteAllCompleted();
  }

}
