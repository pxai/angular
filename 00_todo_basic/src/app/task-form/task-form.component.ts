import { Component, OnInit, Input } from '@angular/core';
import Task from '../models/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Input() editTask: Task;
  @Input() submit: (task: Task) => void;
  private _task: Task;
  private _submitted: boolean;
  private _priorities: string[];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    console.log("Edit task? :", this.editTask);
    this._task = this.editTask || new Task();
    this._priorities = ['low', 'medium', 'high'];
  }

  get priorities () {
      return this._priorities;
  }

  get task () {
      return this._task;
  }

  onSubmit() {
      console.log("Sent form: ", this._task);
      this.submit(this._task);
      this._submitted = true;
  }
}
