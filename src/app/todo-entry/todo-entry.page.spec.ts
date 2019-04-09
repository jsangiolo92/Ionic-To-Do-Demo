import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryPage } from './todo-entry.page';

describe('TodoEntryPage', () => {
  let component: TodoEntryPage;
  let fixture: ComponentFixture<TodoEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoEntryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
