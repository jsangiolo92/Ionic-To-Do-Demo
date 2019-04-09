import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../todo-entry/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private url = '../../assets/dummy.json';
  private toDoList = [
    {'id': 1, 'item': 'Dummy to-do 1', 'important': false, 'detail': 'Here is the detail for the first item.'},
    {'id': 2, 'item': 'Dummy to-do 2', 'important': true, 'detail': 'Here is the detail for the second item. This one is important.'},
    {'id': 3, 'item': 'Dummy to-do 3', 'important': false, 'detail': 'Here is the detail for the third item.'},
    {'id': 4, 'item': 'Dummy to-do 4', 'important': true, 'detail': 'Here is the detail for the fourth item. This one is important.'},
    {'id': 5, 'item': 'Dummy to-do 5', 'important': false, 'detail': 'Here is the detail for the fifth item.'}
  ];

  constructor(private http: HttpClient) { }

  // example of get request
  // getToDos(): Observable<ToDoItem[]> {
  //   return this.http.get<ToDoItem[]>(this.url);
  // }

  getToDos(): ToDoItem[] {
    return [...this.toDoList];
  }

  getToDo(id: number): ToDoItem {
    return this.toDoList.find(todo => {
      return todo.id === id;
    });
  }

  addToDo(newToDo: ToDoItem): void {
    this.toDoList.push(newToDo);
    console.log('toDoList is: ', this.toDoList);
  }
}
