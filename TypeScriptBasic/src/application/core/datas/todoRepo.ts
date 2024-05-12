import { Todo } from "application/core/entities/todoItem";
import { FUNC_LOG } from "application/utilities/zLog";

export class TodoRepo {

	private todoList : Todo[];

	constructor(){
		this.todoList = [];
	}

	addTodo(title: string, description?: string): Todo {
		FUNC_LOG();
		
		const todo = new Todo(title, description);
		this.todoList.unshift(todo);
		
		//add new todo for data hahahaha
		return todo;
	}

	printTodo(){
		FUNC_LOG();
		for (let index = 0; index < this.todoList.length; index++) {
			const element = this.todoList[index];
			console.log(element.toString());
		}
	}
}
