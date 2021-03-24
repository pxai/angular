import { Injectable } from '@angular/core';
import Task from '../models/task';

@Injectable({
  providedIn: 'root'
})
export default class TodoList {
    private _tasks: Task[];

    constructor () {
      this._tasks = [];
      console.log("This is it: TodoList");
    }

    get tasks(): any[] {
      return this._tasks;
    }

    add(task: Task) {
      if (!task.id) { task.id = new Date().getMilliseconds() }
      this._tasks.push(task);
    }

    remove(id: number) {
      this._tasks = this._tasks.filter(task => task.id !== id);
    }

    update(index: number, task: Task) {
      if (index >= 0 && index < this._tasks.length) {
        this._tasks[index] = task;
      }
    }
}
