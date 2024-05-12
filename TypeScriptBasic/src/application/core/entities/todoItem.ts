import { FUNC_LOG } from "application/utilities/zLog";

export class Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: Date;
	updatedAt: Date;
  
	static globalID = 0;
  
	constructor(title: string, description?: string) {
	  this.id = this.generateId();
	  this.title = title;
	  this.description = description || "";
	  this.completed = false;
	  this.createdAt = new Date();
	  this.updatedAt = new Date();
	}
  
	generateId(): string {
		FUNC_LOG();

	  // Generate a unique identifier for each Todo instance
	  let val = Todo.globalID;
	  Todo.globalID++;
	  return val.toString();
	}
  
	markAsCompleted(): void {
	  this.completed = true;
	  this.updatedAt = new Date();
	}

	/**
	 * get text from todo
	 * @returns description of a todo
	 */
	toString(): string{
		return `TODO #${this.id}\t${this.title}\t${this.description}\t${this.updatedAt}\t${this.completed}`
	}
  }