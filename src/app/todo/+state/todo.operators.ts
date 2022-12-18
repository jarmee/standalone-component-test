import { map, OperatorFunction } from 'rxjs';
import { CreateTodo, Todo, TodoList } from './todo.model';

export const createItem: () => OperatorFunction<
  [TodoList, CreateTodo],
  TodoList
> = () =>
  map(([list, itemToCreate]) => {
    const id: number = list.length + 1;
    return [{ id, ...itemToCreate, done: false }, ...list];
  });
