import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import Task from '../models/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void { }

  get tasks() {
    return this.tasksService.getAll();
  }

  remove(id: number) {
    return this.tasksService.remove(id);
  }

  submit(task: Task) {
    this.tasksService.add(task);
  }
}
