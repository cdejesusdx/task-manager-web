import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    description: [''],
    dueDate: [''],
    status: ['Pending'],
  });

  id?: string;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private taskSvc: TaskService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? undefined;
    if (this.id) {
      this.loading = true;
      this.taskSvc.get(this.id).subscribe((t) => {
        this.form.patchValue(t);
        this.loading = false;
      });
    }
  }

  save(): void {
    if (this.form.invalid) return;
    const data = this.form.value as Partial<Task>;

    const obs = this.id
      ? this.taskSvc.update(this.id, data)
      : this.taskSvc.add(data);

    obs.subscribe(() => this.router.navigate(['/tasks']));
  }
}
