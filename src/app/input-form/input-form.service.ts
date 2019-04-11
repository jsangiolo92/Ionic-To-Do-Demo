import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoListService } from '../todo-list/todo-list.service';
import { ToDoItem } from '../todo-entry/todo-item.model';
import { ResponseStatus } from '../models/response-status.mode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {
  private url = 'http://localhost:3050/api/todos';

  constructor(private http: HttpClient) { }

  postToDo(toDoItem: string, details: string, important: boolean): Observable<ResponseStatus> {
    const newToDoEntry: ToDoItem = {item: toDoItem, detail: details, important: important};
    return this.http.post<ResponseStatus>(this.url, newToDoEntry);
  }

  putToDo(id: number, toDoItem: string, details: string, important: boolean): Observable<ResponseStatus> {
    const updatedEntry: ToDoItem = {id: id, item: toDoItem, detail: details, important: important};
    return this.http.put<ResponseStatus>(`${this.url}/${id}`, updatedEntry);
  }
}
