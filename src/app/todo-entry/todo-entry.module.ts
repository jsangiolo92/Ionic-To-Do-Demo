import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoEntryPage } from './todo-entry.page';

const routes: Routes = [
  {
    path: '',
    component: TodoEntryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodoEntryPage]
})
export class TodoEntryPageModule {}
