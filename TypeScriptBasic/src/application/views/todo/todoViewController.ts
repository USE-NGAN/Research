import { ZTodoRepo } from "application/core/datas/todoRepo";
import { ZTodoView, ZTodoViewIF } from "./todoView";
import { FUNC_LOG } from "application/utilities/zLog";
import { ZTodo } from "application/core/entities/todoItem";

export class ZTodoViewController implements ZTodoViewIF {
  _todoRepo = new ZTodoRepo();

  _todoView = new ZTodoView(this);

  constructor() {}

  _viewDidLoaded() {
    FUNC_LOG();

    this._todoRepo._buildDummyData();

    this._render();
  }

  private _render() {
    this._todoView._render(this._todoRepo._todoList);
  }

  // #region TodoView CallBack
  _requestDelete(todo: ZTodo): void {
    console.log(`REQUEST DELETE ${todo._title}`);
    this._todoRepo._deleteTodo(todo);
    this._todoView._deleteUIRowForTodo(todo);
  }
  _requestMarkCompleted(todo: ZTodo): void {
    console.log(`REQUEST MARK COMPLETED ${todo._title}`);
    todo._markAsCompleted();
    this._todoView._deleteUIRowForTodo(todo);
  }
  // #endregion TodoView CallBack
}
