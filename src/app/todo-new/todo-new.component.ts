import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})

export class TodoNewComponent implements OnInit {


  constructor(private todosService: TodosService ) {}
  ngOnInit() {}

  AddNewTodoByEnter(event: any) {
    
    if(event.keyCode == 13) {
      if(event.target.value=="")
        return false;

      if( this.todosService.saveTodo(event.target.value) ) {
        event.target.value="";
      } else
        alert("Error on add new Item");
  
      return false;

    }
  }

}
