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

  get(id: number): Task {
    return this.todoList.task(id);
  }

  getAll() {
    return this.todoList.tasks;
  }

  add(task: Task) {
    this.todoList.add({...task});
  }

  remove(id: number) {
    this.todoList.remove(id);
  }

  update(task: Task) {
    this.todoList.update({...task});
  }
}
