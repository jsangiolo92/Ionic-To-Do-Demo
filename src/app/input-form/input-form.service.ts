import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListService } from '../todo-list/todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {

  private count = 5;

  constructor(private http: HttpClient, private toDoListService: ToDoListService) { }

  postToDo(toDoItem: string, details: string, important: boolean): void {
    this.count++;
    const obj = {id: this.count, item: toDoItem, detail: details, important: important};
    this.toDoListService.addToDo(obj);
  }
}
