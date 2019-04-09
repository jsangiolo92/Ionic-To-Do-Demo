import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  private url = '../../assets/dummy.json';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<ToDoItem[]> {
    console.log('getToDos called');
    return this.http.get<ToDoItem[]>(this.url);
  }
}
