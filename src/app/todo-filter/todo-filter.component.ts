import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {

  public rootSelected: boolean = false;
  public activSelected: boolean = false;
  public complSelected: boolean = false;

  constructor( 
    public location: Location , 
    public todosService: TodosService ) {

  }
  
  ngOnInit() { 

    console.log( location.pathname);

    if( location.pathname=="/") {
      this.rootSelected = true;
      this.countCompleted = this.todosService.getAllCount();
    }

    if( location.pathname=="/active") {
      this.activSelected = true;
      this.countCompleted = this.todosService.getAllActiveCount();
    }

    if( location.pathname=="/completed") {
      this.complSelected = true;
      this.countCompleted = this.todosService.getAllCompletedCount();
    }

  }
  
  countCompleted:number = 0;

  deleteCompleted(event: any) {
    this.countCompleted = 0;
    this.todosService.deleteAllCompleted();
  }

}
