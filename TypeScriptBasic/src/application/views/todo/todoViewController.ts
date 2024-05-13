import { TodoRepo } from "application/core/datas/todoRepo";
import { TodoView, TodoViewIF } from "./todoView";
import { FUNC_LOG } from "application/utilities/zLog";
import { Todo } from "application/core/entities/todoItem";

export class TodoViewController implements TodoViewIF {
  todoRepo = new TodoRepo();

  todoView = new TodoView(this);

  constructor() {}

  viewDidLoaded() {
    FUNC_LOG();

    this.todoRepo.buildDummyData();

    this.render();
  }

  render() {
    this.todoView.render(this.todoRepo.todoList);
  }

  // #region TodoView CallBack
  zRequestDelete(todo: Todo): void {
    console.log(`REQUEST DELETE ${todo.title}`);
    this.todoRepo.deleteTodo(todo);
    this.todoView.deleteUIRowForTodo(todo);
  }
  zRequestMarkCompleted(todo: Todo): void {
    console.log(`REQUEST MARK COMPLETED ${todo.title}`);
    todo.markAsCompleted();
    this.todoView.deleteUIRowForTodo(todo);
  }
  // #endregion TodoView CallBack
}
