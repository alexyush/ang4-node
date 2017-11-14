import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list-completed',
  templateUrl: './todo-list-completed.component.html', 
})
export class TodoListCompletedComponent implements OnInit {
 

  constructor(public todosService: TodosService) {}
  
    ngOnInit() {}
  
    submitEditingTodo(event: any) {
      
      let todoId : number = parseInt( event.target.getElementsByTagName("input")[0].getAttribute("data-id") ); 
      
      if( this.todosService.isEditingTodo(todoId) )
        this.todosService.editingTodo( todoId ,true );
      else
        this.todosService.editingTodo( todoId , false  );
  
      if(event.target.getElementsByTagName("input")[0].value=="") {
        this.todosService.deleteTodo( todoId );
        return true;
      }   
      
      this.todosService.changeNameTodo( todoId , event.target.getElementsByTagName("input")[0].value );
  
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
  
      document.getElementById("toggle-all")["checked"] = false; 
      if( event.target.hasAttribute("data-id") ) {
        let todoId : number = parseInt( event.target.getAttribute("data-id") ); 
        if(event.target.checked )
          this.todosService.changeCompleteTodo( todoId , true );
        else
          this.todosService.changeCompleteTodo( todoId , false );
      }
    }
  
  
    selectAllTodo(event: any) {
      
          if(event.target.checked) {
            this.todosService.changeCompleteStatusAllTodo(true);
          } else {
            this.todosService.changeCompleteStatusAllTodo(false);
          }
      
      
    }
    
    destroyTodo(event: any) {
      console.log(event);
      let todoId : number = parseInt( event.target.getAttribute("data-id") );
      this.todosService.deleteTodo( todoId );
  
    }

}
