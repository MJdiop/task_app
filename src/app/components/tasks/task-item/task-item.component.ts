import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { TaskItem } from '../../../interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @ViewChild('open', { static: true }) dialog!: ElementRef<HTMLDialogElement>;
  cdr = inject(ChangeDetectorRef);
  @Input() task!: TaskItem
  @Output() toggleDone = new EventEmitter<TaskItem>();
  @Output() delete = new EventEmitter<TaskItem>();
  @Output() edit = new EventEmitter<any>();
  isEditing: boolean = false;

  textDecoration = "line-through"

  toggleTask(task: TaskItem) {
    this.toggleDone.emit(task);
  }

  deleteTask(task: TaskItem) {
    this.show();
  }

  handleConfirmDelete(task: TaskItem) {
    this.delete.emit(task);
    this.close();
  }

  editTask(task: TaskItem) {
    this.edit.emit(task);
  }

  handleClickEdit() {
    this.isEditing = true;
  }

  show() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }

  close() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }


}
