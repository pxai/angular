import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';
import Task from '../models/task';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private _task: Task;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this._task = this.tasksService.get(params['id']);
      console.log("Id: ", params['id'], " and: ", this._task);
    });
  }

  get task(): Task {
      return this._task;
  }
}
