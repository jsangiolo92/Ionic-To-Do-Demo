import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../todo-list/todo-item.model';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../todo-list/todo-list.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.page.html',
  styleUrls: ['./todo-entry.page.scss'],
})
export class TodoEntryPage implements OnInit {

  currentToDo: ToDoItem;

  constructor(private route: ActivatedRoute, private toDoListService: ToDoListService) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.currentToDo = this.toDoListService.getToDo(id);
  }

}
