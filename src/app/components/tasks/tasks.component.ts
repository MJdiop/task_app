import { Component } from '@angular/core';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskItemComponent } from "./task-item/task-item.component";
import { TaskItem } from '../../interfaces';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TaskInputComponent, TaskItemComponent]
})
export class TasksComponent {
  tasks: Array<TaskItem> = []
  text: string = '';

  ngOnInit(): void {
    this.tasks = [
      { id: 1, done: false, text: 'Install Dependencies' },
      { id: 2, done: false, text: 'Product Feature' },
      { id: 3, done: false, text: 'Write Unit test' },
      { id: 4, done: false, text: 'Deploy app' },
    ];
  }


  toggleTask(task: TaskItem) {
    this.tasks = this.tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, done: !t.done };
      }
      return t;
    }
    );
  }

  deleteTask(task: TaskItem) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  }

  editTask(task: TaskItem) {

    this.tasks = this.tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, text: task.text };
      }
      return t;
    });
  }

  addTask(text: string) {
    if (!text) {
      alert('Please enter a task');
    } else if (this.tasks.find((t) => t.text === text)) {
      alert(`Task => (${text}) already exists`);
    } else {
      this.tasks = [
        ...this.tasks,
        {
          id: this.tasks.length + 1,
          done: false,
          text,
        },
      ];
    }
  }

  clearAll() {
    this.tasks = [];
  }
}
