import { Injectable } from '@angular/core';
import TodoList from './api/todo_list';
import Task from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private todoList: TodoList) {
    console.log("Service generated!!");
  }

  getAll() {
    return this.todoList.tasks;
  }

  add(task: Task) {
    this.todoList.add(task);
  }
}
