import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompletedComponent } from './app-completed.component';

describe('AppCompletedComponent', () => {
  let component: AppCompletedComponent;
  let fixture: ComponentFixture<AppCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
