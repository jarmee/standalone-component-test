import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  pipe,
  Subject,
  Subscription,
  tap,
  withLatestFrom,
} from 'rxjs';
import { CreateTodo, Todo, TodoList } from './todo.model';
import { createItem } from './todo.operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnDestroy {
  private _items$: BehaviorSubject<TodoList> = new BehaviorSubject<TodoList>(
    []
  );

  private _createItem$: Subject<CreateTodo> = new Subject<CreateTodo>();

  private _subscriptions: Array<Subscription> = [];

  items$: Observable<TodoList> = this._items$.asObservable();

  constructor() {
    this._subscriptions.push(
      combineLatest([
        this._items$.asObservable(),
        this._createItem$.asObservable(),
      ])
        .pipe(
          createItem(),
          tap((updatedItems) => this._items$.next(updatedItems))
        )
        .subscribe()
    );
  }

  create(item: CreateTodo) {
    this._createItem$.next(item);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
