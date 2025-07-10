import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { environment } from 'src/environments/environment';

interface Page<T> {
  items: T[];
  totalCount: number;
  pageIndex: number;
  pageSize: number;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private api = `${environment.apiBaseUrl}/api/tasks-manager`;

  constructor(private http: HttpClient) {}

  list(page = 1, size = 10): Observable<Page<Task>> {
    return this.http.get<Page<Task>>(`${this.api}?page=${page}&size=${size}`);
  }

  get(id: string)  { return this.http.get<Task>(`${this.api}/${id}`); }
  add(t: Partial<Task>)      { return this.http.post(this.api, t); }
  update(id: string, t: Partial<Task>) { return this.http.put(`${this.api}/${id}`, t); }
  delete(id: string)         { return this.http.delete(`${this.api}/${id}`); }
}
