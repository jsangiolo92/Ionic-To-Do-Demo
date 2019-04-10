import { ToDoItem } from '../todo-entry/todo-item.model';

export interface ToDoListResponse {
  responseStatus: Object;
  toDoItemList: ToDoItem[];
}
