import { Todo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class TodoView {
  private readonly table: JQuery<HTMLElement>;

  private _delegate: TodoViewIF;

  constructor(delegate: TodoViewIF) {
    this._delegate = delegate;
    this.table = $("#tblTodo");
    this.table.on("click", "tr", function () {
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
  render(todoList: Todo[]) {
    const body = this.table.children("tbody");
    body.empty();

    todoList.forEach((todo) => {
      const rowID = "todo-" + todo.id;
      var newRow = $("<tr>");
      newRow.attr("id", rowID);
      newRow.attr("todoID", todo.id);

      newRow.append($("<td>").text(todo.title));

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
  private _btnDelete_Clicked(todo: Todo) {
    FUNC_LOG();

    this._delegate.zRequestDelete(todo);
  }

  private _btnMarkAsCompleted_Clicked(todo: Todo) {
    FUNC_LOG();
    this._delegate.zRequestMarkCompleted(todo);
  }
  // #endregion UI Event

  // #region HELPER
  /**
   * remove row for a todo
   * @param todo todo item to be removed
   */
  deleteUIRowForTodo(todo: Todo) {
    const rowID = "#todo-" + todo.id;
    let row = this.table.find("tbody > " + rowID);
    if (row) {
      row.remove();
    }
  }
  // #endregion HELPER
}

export interface TodoViewIF {
  zRequestDelete(todo: Todo): void;
  zRequestMarkCompleted(todo: Todo): void;
}
