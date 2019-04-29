import { Component, OnInit } from '@angular/core';
import { InputFormService } from './input-form.service';
import { ActivatedRoute } from '@angular/router';
import { ToDoEntryService } from '../todo-entry/todo-entry.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {
  id: number = null;
  toDoForm: FormGroup = this.fb.group({
    entry: [''],
    details: [''],
    important: [false]
  });

  constructor(
    private inputFormService: InputFormService,
    private toDoEntryService: ToDoEntryService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.toDoEntryService.getToDo(parseInt(id))
        .subscribe( ({toDoItem}) => {
          this.id = toDoItem.id;
          this.toDoForm.setValue({entry: toDoItem.item, details: toDoItem.detail, important: toDoItem.important});
        });
    }
  }

  handleClick(): void {
    if (!this.id) {
      this.inputFormService.postToDo(this.toDoForm.value.entry, this.toDoForm.value.details, this.toDoForm.value.important)
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
      this.inputFormService.putToDo(this.id, this.toDoForm.value.entry, this.toDoForm.value.details, this.toDoForm.value.important)
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
    this.toDoForm.setValue({entry: '', details: '', important: false});
  }

}
