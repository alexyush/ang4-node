import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {


    private todos: Array<Object>;
    

    changeNameTodo(todoId: number,nameTodo:string ):void {

        this.todos.forEach(td => {
            if( td["id"]==todoId ) {
                td["name"] = nameTodo.trim();
            } 
        });
        
        localStorage.setItem("todos", JSON.stringify(this.todos) );
    }

    changeCompleteTodo( todoId: number,  completed:boolean ): void {
        this.todos.forEach(td => {
            if( td["id"]==todoId ) {
                td["completed"] = completed;
            } 
        });
        
        localStorage.setItem("todos", JSON.stringify(this.todos) );

    }

    editingTodo( todoId: number,  editing:boolean ): void {
        this.todos.forEach(td => {
            if( td["id"]==todoId ) {
                td["editing"] = editing;
            } 
        });
        
        localStorage.setItem("todos", JSON.stringify(this.todos) );

    }

    deleteTodo(todoId: number) {

        for (var key in this.todos) {

            if( this.todos[key] ==todoId ) {
                delete this.todos[key]; 
            } 
        }

        localStorage.setItem("todos", JSON.stringify(this.todos) );
        return true;
                
    }
    isEditingTodo(todoId: number): boolean {
        
                this.todos.forEach(td => {
                    if(  td["id"]==todoId ) {
                        return td["editing"] ; 
                    } 
                });
                return false;
        
            }

    isCompletedTodo(todoId: number): boolean {

        this.todos.forEach(td => {
            if(  td["id"]==todoId ) {
                return td["completed"] ; 
            } 
        });
        return false;

    }

    getTodos(): Array<Object> {

        return this.todos = localStorage.getItem("todos")
            ?
            JSON.parse(localStorage.getItem("todos"))
            :
            [];
    }

    

    saveTodo(todoName: string ): boolean {
 
        this.todos = localStorage.getItem("todos")
            ?
            JSON.parse(localStorage.getItem("todos"))
            :
            [];
              
        this.todos.push( {
            id: this.getTodoIdForLast() + 1  ,
            name: todoName.trim(),
            completed: false,
            editing: false,
        });

        localStorage.setItem("todos", JSON.stringify(this.todos) );
        this.setTodoLastId( this.getTodoIdForLast() + 1 );
        return true;

    }  

    setTodoLastId(lastId: number): void {
        localStorage.setItem("todosId", (this.getTodoIdForLast() + 1 ).toString() );
    }

    getTodoIdForLast(): number { 
        return  Number(localStorage.getItem("todosId")) ; 
    }

}