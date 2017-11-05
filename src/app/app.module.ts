import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TodoNewComponent } from './todo-new/todo-new.component'; 
import { TodosService } from './todos.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodoListComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule 
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
