import { Todo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class TodoRepo {
  private _todoList: Todo[] = [];
  public get todoList(): Todo[] {
    return this._todoList;
  }

  constructor() {}

  _addTodo(title: string, description?: string): Todo {
    FUNC_LOG();

    const todo = new Todo(title, description);
    this.todoList.unshift(todo);

    //add new todo for data hahahaha
    return todo;
  }

  _buildDummyData() {
    FUNC_LOG();

    for (let i = 0; i < 10; i++) {
      let todo = new Todo("Task " + i, "Desc Task " + i);
      this.todoList.push(todo);
    }
  }
  _buildDummyDataCompleted() {
    FUNC_LOG();

    for (let i = 20; i < 30; i++) {
      let todo = new Todo("Task " + i, "Desc Task " + i);
      todo._markAsCompleted();
      this.todoList.push(todo);
    }
  }

  _printTodo() {
    FUNC_LOG();
    for (let index = 0; index < this.todoList.length; index++) {
      const element = this.todoList[index];
      console.log(element._toString());
    }
  }

  _deleteTodo(todo: Todo) {
    const idx = this.todoList.indexOf(todo);
    if (idx !== -1) {
      this.todoList.splice(idx, 1);
    }
  }
}
