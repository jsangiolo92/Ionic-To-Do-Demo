import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadChildren: './todo-list/todo-list.module#TodoListPageModule' },
  { path: 'input', loadChildren: './input-form/input-form.module#InputFormPageModule' },
  { path: 'list/:id', loadChildren: './todo-entry/todo-entry.module#TodoEntryPageModule' },
  { path: 'input/:id', loadChildren: './input-form/input-form.module#InputFormPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
