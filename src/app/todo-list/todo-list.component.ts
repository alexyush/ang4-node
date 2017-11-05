import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  checkKeys(event: any) {
    console.log(event)
    let todoId : number = parseInt( event.target.getAttribute("data-id") ); 

    if(event.keyCode == 27) {
      this.todosService.editingTodo( todoId , false  );
    }

    if(event.keyCode == 13) {

      if(event.target.value=="") { 
        this.todosService.deleteTodo( todoId );
      } 
    } 
     
  }

  blurTodo(event: any) {
    
      if( event.target.hasAttribute("data-id") ) {
      
            let todoId : number = parseInt( event.target.getAttribute("data-id") ); 
            
            if( this.todosService.isEditingTodo(todoId) )
              this.todosService.editingTodo( todoId ,true );
            else
              this.todosService.editingTodo( todoId , false  );

            if(event.target.value=="") {
              return true;
            }   

            this.todosService.changeNameTodo( todoId , event.target.value );
            
      } 

  }

  editingTodo(event: any) {
    
    if( event.target.hasAttribute("data-id") ) {
            let todoId : number = parseInt( event.target.getAttribute("data-id") ); 
          
            if( this.todosService.isEditingTodo(todoId) )
              this.todosService.editingTodo( todoId , false);
            else
              this.todosService.editingTodo( todoId ,  true );
            
      } 
  }

  completeTodo(event: any) {
    
    if( event.target.hasAttribute("data-id") ) {
      let todoId : number = parseInt( event.target.getAttribute("data-id") ); 
      if(event.target.checked )
        this.todosService.changeCompleteTodo( todoId , true );
      else
        this.todosService.changeCompleteTodo( todoId , false );
    }
  }

}
