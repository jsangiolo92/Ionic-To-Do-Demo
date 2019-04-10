import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoListResponse } from '../models/todo-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private url = 'http://localhost:3050/api/todos';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDoListResponse> {
    return this.http.get<ToDoListResponse>(this.url);
  }
}
