import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './todo-item.model';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../todo-list/todo-list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.page.html',
  styleUrls: ['./todo-entry.page.scss'],
})
export class TodoEntryPage implements OnInit {

  currentToDo: ToDoItem;

  constructor(
    private route: ActivatedRoute,
    private toDoListService: ToDoListService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.currentToDo = this.toDoListService.getToDo(id);
  }

  handleEdit(id: number) {
    console.log('to do to be updated is: ', id);
  }

  handleDelete(id: number): void {
    console.log('to do to be deleted is: ', id);
  }

  async presentDeleteAlert(id: number) {
    console.log('called presentDeleteAlert');
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      subHeader: 'Delete Clicked',
      message: 'Do you really want to delete?',
      backdropDismiss: false,
      buttons: [{text: 'Delete', role: 'delete', handler: () => true}, {text: 'Cancel', role: 'cancel', handler: () => true}]
    });

    alert.present()
    .then(() => {
      alert.onWillDismiss()
      .then( ({role}) => {
        if (role === 'delete') {
          this.handleDelete(id);
        } else {
          console.log('Delete Canceled!');
        }
      });
    });
  }

}
