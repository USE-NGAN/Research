import { FUNC_LOG } from "application/utilities/zLog";

export class ZTodo {
  _id: string;
  _title: string;
  _description: string;
  _completed: boolean;
  _createdAt: Date;
  _updatedAt: Date;

  static globalID = 0;

  constructor(title: string, description?: string) {
    this._id = this._generateId();
    this._title = title;
    this._description = description || "";
    this._completed = false;
    this._createdAt = new Date();
    this._updatedAt = new Date();
  }

  _generateId(): string {
    FUNC_LOG();

    // Generate a unique identifier for each Todo instance
    let val = ZTodo.globalID;
    ZTodo.globalID++;
    return val.toString();
  }

  _markAsCompleted(): void {
    this._completed = true;
    this._updatedAt = new Date();
  }

  /**
   * get text from todo
   * @returns description of a todo
   */
  _toString(): string {
    return `TODO #${this._id}\t${this._title}\t${this._description}\t${this._updatedAt}\t${this._completed}`;
  }
}
