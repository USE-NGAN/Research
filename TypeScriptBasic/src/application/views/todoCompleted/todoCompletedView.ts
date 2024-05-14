import { Todo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class TodoCompletedView {
  private readonly table: JQuery<HTMLElement>;
  private _delegate: TodoCompletedViewIF;

  constructor(delegate: TodoCompletedViewIF) {
    this.table = $("#tblCompleted");
    this._delegate = delegate;
  }

  /**
   * Render all todo item to table
   * @param todoList list of todo item to draw
   */
  _render(todoList: Todo[]) {
    const body = this.table.children("tbody");
    body.empty();

    todoList.forEach((todo) => {
      const rowID = "todo-completed-" + todo._id;
      var newRow = $("<tr>");
      newRow.attr("id", rowID);

      newRow.append($("<td>").text(todo._title));

      // Add delete button
      const btnDelete = $("<button>")
        .text("Delete")
        .on("click", () => {
          this._btnDelete_Clicked(todo);
        });
      newRow.append($("<td>").append(btnDelete));

      // Add Complete button
      const btnRemoveCompleted = $("<button>")
        .text("Un Completed")
        .on("click", () => {
          //   this.btnMarkAsCompleted_Clicked(todo);
        });
      newRow.append($("<td>").append(btnRemoveCompleted));

      body.append(newRow);
    });
  }

  // #region UI Event

  /**
   * Delete a todo item from reposite and update UI
   * @param todo todo item to delete
   */
  private _btnDelete_Clicked(todo: Todo) {
    FUNC_LOG();

    this._delegate._requestDelete(todo);
  }

  // #endregion UI Event

  // #region HELPER
  /**
   * remove row for a todo
   * @param todo todo item to be removed
   */
  _deleteUIRowForTodo(todo: Todo) {
    const rowID = "#todo-completed-" + todo._id;
    let row = this.table.find("tbody > " + rowID);
    if (row) {
      row.remove();
    }
  }

  // #endregion HELPER
} // END CLASS TodoCompletedView

export interface TodoCompletedViewIF {
  _requestDelete(todo: Todo): void;
  _requestRemoveCompleted(todo: Todo): void;
}
