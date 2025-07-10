// src/app/tasks/pages/task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = false;
  page = 1;

  constructor(private taskSvc: TaskService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading = true;
    this.taskSvc.list(this.page, 10).subscribe({
      next: (res) => { this.tasks = res.items; this.loading = false; },
      error: (_) =>  { this.loading = false; }
    });
  }
}
