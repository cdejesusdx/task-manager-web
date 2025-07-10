// src/app/tasks/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = `${environment.apiBaseUrl}/api/tasks-manager`;

  constructor(private http: HttpClient) {}

  list(page = 1, size = 10): Observable<{items: Task[]}> {
    return this.http.get<{items: Task[]}>(`${this.api}?page=${page}&size=${size}`);
  }

  get(id: string) {
    return this.http.get<Task>(`${this.api}/${id}`);
  }

  add(task: Partial<Task>) {
    return this.http.post(this.api, task);
  }

  update(id: string, task: Partial<Task>) {
    return this.http.put(`${this.api}/${id}`, task);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
