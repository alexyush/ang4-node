import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListActiveComponent } from './todo-list-active.component';

describe('TodoListActiveComponent', () => {
  let component: TodoListActiveComponent;
  let fixture: ComponentFixture<TodoListActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
