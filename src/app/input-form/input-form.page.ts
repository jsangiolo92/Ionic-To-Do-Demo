import { Component, OnInit } from '@angular/core';
import { InputFormService } from './input-form.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.page.html',
  styleUrls: ['./input-form.page.scss'],
})
export class InputFormPage implements OnInit {

  userInput = '';
  important = false;

  constructor(private inputFormService: InputFormService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.inputFormService.postToDo(this.userInput, this.important);
    this.userInput = '';
    this.important = false;
  }

}
