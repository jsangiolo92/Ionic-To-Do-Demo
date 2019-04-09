import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './todo-item.model';
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
    // use when using get request
    // this.toDoListService.getToDos()
    //     .subscribe( (data) => {
    //       console.log({data});
    //       this.toDoList = data;
    //     });
    this.toDoList = this.toDoListService.getToDos();
  }
}
