import { TodoRepo } from "application/core/datas/todoRepo";
import { TodoView, TodoViewIF } from "./todoView";
import { FUNC_LOG } from "application/utilities/zLog";
import { Todo } from "application/core/entities/todoItem";

export class ZTodoViewController implements TodoViewIF {
  _todoRepo = new TodoRepo();

  _todoView = new TodoView(this);

  constructor() {}

  _viewDidLoaded() {
    FUNC_LOG();

    this._todoRepo._buildDummyData();

    this._render();
  }

  private _render() {
    this._todoView._render(this._todoRepo.todoList);
  }

  // #region TodoView CallBack
  _requestDelete(todo: Todo): void {
    console.log(`REQUEST DELETE ${todo._title}`);
    this._todoRepo._deleteTodo(todo);
    this._todoView._deleteUIRowForTodo(todo);
  }
  _requestMarkCompleted(todo: Todo): void {
    console.log(`REQUEST MARK COMPLETED ${todo._title}`);
    todo._markAsCompleted();
    this._todoView._deleteUIRowForTodo(todo);
  }
  // #endregion TodoView CallBack
}
