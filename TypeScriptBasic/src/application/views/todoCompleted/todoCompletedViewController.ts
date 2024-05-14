import { ZTodoRepo } from "application/core/datas/todoRepo";
import { FUNC_LOG } from "application/utilities/zLog";
import { ZTodo } from "application/core/entities/todoItem";
import { ZTodoCompletedView, ZTodoCompletedViewIF } from "./todoCompletedView";

export class ZTodoCompletedViewController implements ZTodoCompletedViewIF {
  _todoRepo = new ZTodoRepo();

  _todoView = new ZTodoCompletedView(this);

  constructor() {}

  _viewDidLoaded() {
    FUNC_LOG();

    this._todoRepo._buildDummyDataCompleted();
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
  _requestRemoveCompleted(todo: ZTodo): void {}
  // #endregion TodoView CallBack
}
