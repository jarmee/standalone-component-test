import { Component } from '@angular/core';
import { TodoListComponent } from './list/todo-list.component';
import { TodoList, TodoService } from './+state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  imports: [TodoListComponent, CommonModule],
})
export default class TodoComponent {
  items$: Observable<TodoList> = this._service.items$;

  constructor(private _service: TodoService) {}
}
