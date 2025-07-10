import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  loading = false;
  page = 1;
  pageSize = 10;

  constructor(private taskSvc: TaskService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch(): void {
    this.loading = true;
    this.taskSvc.list(this.page, this.pageSize).subscribe({
      next: (res) => {
        this.tasks = res.items;
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  delete(id: string): void {
    if (!confirm('¿Eliminar esta tarea?')) return;
    this.taskSvc.delete(id).subscribe(() => this.fetch());
  }
}
