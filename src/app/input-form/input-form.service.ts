import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InputFormService {
  constructor(private http: HttpClient) { }

  postToDo(toDoItem: string, details: string, important: boolean): void {
    const obj = {item: toDoItem, details: details, important: important};
    console.log('new todo to post is: ', obj);
  }
}
