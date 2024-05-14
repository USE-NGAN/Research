import { ZTodo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class ZTodoRepo {
  _todoList: ZTodo[] = [];

  constructor() {}

  _addTodo(title: string, description?: string): ZTodo {
    FUNC_LOG();

    const todo = new ZTodo(title, description);
    this._todoList.unshift(todo);

    //add new todo for data hahahaha
    return todo;
  }

  _buildDummyData() {
    FUNC_LOG();

    for (let i = 0; i < 10; i++) {
      let todo = new ZTodo("Task " + i, "Desc Task " + i);
      this._todoList.push(todo);
    }
  }
  _buildDummyDataCompleted() {
    FUNC_LOG();

    for (let i = 20; i < 30; i++) {
      let todo = new ZTodo("Task " + i, "Desc Task " + i);
      todo._markAsCompleted();
      this._todoList.push(todo);
    }
  }

  _printTodo() {
    FUNC_LOG();
    for (let index = 0; index < this._todoList.length; index++) {
      const element = this._todoList[index];
      console.log(element._toString());
    }
  }

  _deleteTodo(todo: ZTodo) {
    const idx = this._todoList.indexOf(todo);
    if (idx !== -1) {
      this._todoList.splice(idx, 1);
    }
  }
}
