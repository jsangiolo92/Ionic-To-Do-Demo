import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todo-entry/todo-item.model';
import { ToDoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  toDoList: ToDoItem[];

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit() {
    this.fetchToDos();
  }

  ionViewWillEnter() {
    this.fetchToDos();
  }

  fetchToDos(): void {
    this.toDoListService.getToDos()
      .subscribe( (response) => {
        console.log('response is: ', response);
        this.toDoList = response.toDoItemList;
      });
  }
}
