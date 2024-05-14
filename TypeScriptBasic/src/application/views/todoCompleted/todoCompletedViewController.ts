import { TodoRepo } from "application/core/datas/todoRepo";
import { FUNC_LOG } from "application/utilities/zLog";
import { Todo } from "application/core/entities/todoItem";
import { TodoCompletedView, TodoCompletedViewIF } from "./todoCompletedView";

export class TodoCompletedViewController implements TodoCompletedViewIF {
  _todoRepo = new TodoRepo();

  _todoView = new TodoCompletedView(this);

  constructor() {}

  _viewDidLoaded() {
    FUNC_LOG();

    this._todoRepo._buildDummyDataCompleted();
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
  _requestRemoveCompleted(todo: Todo): void {}
  // #endregion TodoView CallBack
}
