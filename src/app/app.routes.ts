// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/pages/task-list.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];
