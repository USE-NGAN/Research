import { Todo } from "../entities/todoItem";

export class TodoRepo {

	private todoList : Todo[];

	constructor(){
		this.todoList = [];
	}

	addTodo(title: string, description?: string): Todo {
		const todo = new Todo(title, description);
		this.todoList.unshift(todo);
		// console.log('ADDDD TODO');
		
		//add new todo for data hahahaha
		return todo;
	}

	printTodo(){
		for (let index = 0; index < this.todoList.length; index++) {
			const element = this.todoList[index];
			console.log(element.toString());
		}
	}
}