import { ZTodo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class ZTodoView {
  private readonly _table: JQuery<HTMLElement>;

  private _delegate: ZTodoViewIF;

  constructor(delegate: ZTodoViewIF) {
    this._delegate = delegate;
    this._table = $("#tblTodo");
    this._table.on("click", "tr", function () {
      const row = $(this);
      console.log(
        "CLICKED ON ROW " + row.attr("id") + "|" + row.attr("todoID")
      );
    });
  }

  /**
   * Render all todo item to table
   * @param todoList list of todo item to draw
   */
  _render(todoList: ZTodo[]) {
    const body = this._table.children("tbody");
    body.empty();

    todoList.forEach((todo) => {
      const rowID = "todo-" + todo._id;
      var newRow = $("<tr>");
      newRow.attr("id", rowID);
      newRow.attr("todoID", todo._id);

      newRow.append($("<td>").text(todo._title));

      // Add delete button
      const btnDelete = $("<button>")
        .text("Delete")
        .on("click", () => {
          this._btnDelete_Clicked(todo);
        });
      newRow.append($("<td>").append(btnDelete));

      // Add Complete button
      const btnCompleted = $("<button>")
        .text("Completed")
        .on("click", () => {
          this._btnMarkAsCompleted_Clicked(todo);
        });
      newRow.append($("<td>").append(btnCompleted));

      body.append(newRow);
    });
  }

  // #region UI Event

  /**
   * Delete a todo item from reposite and update UI
   * @param todo todo item to delete
   */
  private _btnDelete_Clicked(todo: ZTodo) {
    FUNC_LOG();

    this._delegate._requestDelete(todo);
  }

  private _btnMarkAsCompleted_Clicked(todo: ZTodo) {
    FUNC_LOG();
    this._delegate._requestMarkCompleted(todo);
  }
  // #endregion UI Event

  // #region HELPER
  /**
   * remove row for a todo
   * @param todo todo item to be removed
   */
  _deleteUIRowForTodo(todo: ZTodo) {
    const rowID = "#todo-" + todo._id;
    let row = this._table.find("tbody > " + rowID);
    if (row) {
      row.remove();
    }
  }
  // #endregion HELPER
}

export interface ZTodoViewIF {
  _requestDelete(todo: ZTodo): void;
  _requestMarkCompleted(todo: ZTodo): void;
}
