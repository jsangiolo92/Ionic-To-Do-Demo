import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItemResponse } from '../models/todo-entry-response.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoEntryService {
  private url = 'http://localhost:3050/api/todos';

  constructor(private http: HttpClient) { }

  getToDo(id: number): Observable<ToDoItemResponse> {
    return this.http.get<ToDoItemResponse>(`${this.url}/${id}`);
  }

  deleteToDo(id: number): Observable<ToDoItemResponse> {
    return this.http.delete<ToDoItemResponse>(`${this.url}/${id}`);
  }
}
