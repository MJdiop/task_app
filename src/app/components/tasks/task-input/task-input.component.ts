import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskInputComponent {
  @Input() value: string = '';
  @Output() addNewTask = new EventEmitter<string>();

  handladdTask(text: string) {
    this.addNewTask.emit(text);
    this.value = '';
  }
}
