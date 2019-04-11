import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './todo-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToDoEntryService } from './todo-entry.service';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.page.html',
  styleUrls: ['./todo-entry.page.scss'],
})
export class TodoEntryPage implements OnInit {
  currentToDo: ToDoItem = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toDoEntryService: ToDoEntryService,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
// tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.toDoEntryService.getToDo(id)
      .subscribe( (response) => {
        console.log('response is: ', response);
        this.currentToDo = response.toDoItem;
      });
  }

  handleEdit(id: number) {
    this.router.navigate([`/input/${id}`]);
  }

  handleDelete(id: number): void {
    this.toDoEntryService.deleteToDo(id)
      .subscribe( (response) => {
        console.log('response from DELETE: ', response);
        this.router.navigate(['/list']);
      });
  }

  async presentDeleteAlert(id: number) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      subHeader: 'Delete Clicked',
      message: 'Do you really want to delete?',
      backdropDismiss: false,
      buttons: [{text: 'Delete', role: 'delete', handler: () => true}, {text: 'Cancel', role: 'cancel', handler: () => true}]
    });

    alert.present()
    .then( () => {
      return alert.onWillDismiss();
    })
    .then( ({role}) => {
      if (role === 'delete') {
        this.handleDelete(id);
      } else {
        console.log('Delete Canceled!');
      }
    });
  }

}


