import { ToDoItem } from '../todo-entry/todo-item.model';

export interface ToDoItemResponse {
  responseStatus: Object;
  toDoItem: ToDoItem;
}
