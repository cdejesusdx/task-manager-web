import { TaskFormComponent } from './tasks/pages/task-form.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/new', component: TaskFormComponent },
  { path: 'tasks/:id', component: TaskFormComponent },
  { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];
