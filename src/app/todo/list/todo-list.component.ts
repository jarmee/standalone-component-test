import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateTodo, Todo, TodoList } from '../+state';

function __hasChanged({ items }: SimpleChanges) {
  return items?.currentValue !== items?.previousValue;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TodoListComponent implements OnChanges {
  @Input()
  items: TodoList | null = [];

  @Output()
  create: EventEmitter<CreateTodo> = new EventEmitter<CreateTodo>();

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      items: [],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (__hasChanged(changes)) {
      this.formGroup.patchValue(changes['items'].currentValue, {
        emitEvent: false,
      });
    }
  }

  trackById(index: number, item: Todo) {
    return item.id;
  }
}
