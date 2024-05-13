import { TodoRepo } from "application/core/datas/todoRepo";
import { FUNC_LOG } from "application/utilities/zLog";
import { Todo } from "application/core/entities/todoItem";
import { TodoCompletedView, TodoCompletedViewIF } from "./todoCompletedView";

export class TodoCompletedViewController implements TodoCompletedViewIF {
  todoRepo = new TodoRepo();

  todoView = new TodoCompletedView(this);

  constructor() {}

  viewDidLoaded() {
    FUNC_LOG();

    this.todoRepo.buildDummyDataCompleted();
    this.render();
  }

  render() {
    this.todoView.render(this.todoRepo.todoList);
  }

  // #region TodoView CallBack
  requestDelete(todo: Todo): void {
    console.log(`REQUEST DELETE ${todo.title}`);
    this.todoRepo.deleteTodo(todo);
    this.todoView.deleteUIRowForTodo(todo);
  }
  requestRemoveCompleted(todo: Todo): void {}
  // #endregion TodoView CallBack
}
