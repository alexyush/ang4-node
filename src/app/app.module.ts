import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'; 
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TodoNewComponent } from './todo-new/todo-new.component'; 
import { TodosService } from './todos.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppIndexComponent } from './app-index/app-index.component';
import { AppActiveComponent } from './app-active/app-active.component';
import { TodoListActiveComponent } from './todo-list-active/todo-list-active.component';
import { ActivePipe } from './active-pipe';
import { CompletedPipe } from './completed-pipe';
import { AppCompletedComponent } from './app-completed/app-completed.component';
import { TodoListCompletedComponent } from './todo-list-completed/todo-list-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodoListComponent,
    TodoFilterComponent,
    AppIndexComponent,
    AppActiveComponent,
    TodoListActiveComponent,
    ActivePipe,
    AppCompletedComponent,
    TodoListCompletedComponent,
    CompletedPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule  , 
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
