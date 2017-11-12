import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActiveComponent } from './app-active.component';

describe('AppActiveComponent', () => {
  let component: AppActiveComponent;
  let fixture: ComponentFixture<AppActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
