import jquery = require("jquery");

import { TodoRepo } from "./core/datas/todoRepo";
// this helps TypeScript to understand jQuery best !!!  otherwise It will confused .
const $: JQueryStatic = jquery;

export class Application {
	private todoRepo = new TodoRepo();

	static app = new Application();

  constructor() {}

  initApp(){
	console.log('INIT APP');
	
	this.addTodo("TITLE","DESC");
	this.addTodo("TITLE2","DESC2");

  }

  addTodo(title: string, desc: string){
	const todo = this.todoRepo.addTodo(title, desc);
	$("#content").append("<br>Added "+todo.toString());
  }
}

$(document).ready(function () {
  // jQuery methods go here...
  console.log('APP BEGIN');
	Application.app.initApp();
});
