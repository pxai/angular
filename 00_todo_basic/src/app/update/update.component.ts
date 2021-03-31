import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')
    this._task = this.tasksService.get(id);
  }

  get task(): Task {
      return this._task;
  }

  submit(task: Task) {
    console.log("Go update! ", task);
    this.tasksService.update(task);
    this.router.navigateByUrl('/home');
  }
}
