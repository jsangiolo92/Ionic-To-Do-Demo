import { Component, OnInit, Input } from '@angular/core';
import { InputFormService } from './input-form.service';
import { ToDoItem } from '../todo-entry/todo-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoEntryService } from '../todo-entry/todo-entry.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {
  id: number = null;
  userInput = '';
  details = '';
  important = false;

  constructor(
    private inputFormService: InputFormService,
    private toDoEntryService: ToDoEntryService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.toDoEntryService.getToDo(parseInt(id))
        .subscribe( ({toDoItem}) => {
          this.id = toDoItem.id;
          this.userInput = toDoItem.item;
          this.details = toDoItem.detail;
          this.important = toDoItem.important;
        });
    }
  }

  handleClick(): void {
    if (!this.id) {
      this.inputFormService.postToDo(this.userInput, this.details, this.important)
        .subscribe(
          (response) => {
            console.log('response from POST: ', response);
          },
          ({error}) => {
            console.log(error.responseStatus.statusMessage);
            console.log('full error object: ', error);
          }
        );
    } else {
      this.inputFormService.putToDo(this.id, this.userInput, this.details, this.important)
        .subscribe(
          (response) => {
            console.log('response from PUT: ', response);
          },
          ({error}) => {
            console.log(error.responseStatus.statusMessage);
            console.log('full error object: ', error);
          }
        );
    }

    this.id = null;
    this.userInput = '';
    this.details = '';
    this.important = false;
  }

}
