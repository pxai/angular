import { Component, OnInit } from '@angular/core';
import Task from '../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  private _submitted: boolean;
  private _task: Task;
  private _priorities: string[];
  constructor() {}

  ngOnInit(): void {
    this._task = new Task();
    this._priorities = ['low', 'medium', 'high'];
  }

  get priorities () {
      return this._priorities;
  }

  get task () {
      return this._task;
  }

  submit() {
      console.log("Sent form: ", this._task);
      this._submitted = true;
  }
}
