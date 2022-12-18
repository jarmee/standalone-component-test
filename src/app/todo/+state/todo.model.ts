export interface Todo {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface CreateTodo {
  title: string;
  description: string;
}

export type TodoList = Array<Todo>;
