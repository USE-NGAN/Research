// import jquery = require("jquery");
const { v4: uuidv4 } = require("uuid");
import { FUNC_LOG } from "application/utilities/zLog";
// import { FUNC_LOG } from "./utilities/zLog";
// import { getFuncName } from "./utilities/zLog";
import { TodoRepo } from "application/core/datas/todoRepo";
// this helps TypeScript to understand jQuery best !!!  otherwise It will confused .
// const $: JQueryStatic = jquery;


export class Application {
  private todoRepo = new TodoRepo();

  static app = new Application();

  constructor() {}

  //   @named
  initApp() {
    FUNC_LOG();

    this.addTodo("TITLE", "DESC");
    this.addTodo("TITLE2", "DESC2");
    let v4 = uuidv4();
    console.log(`UUID = ${v4}`);
    // console.log(chalk.red(`UUID = ${v4}`))
  }

  addTodo(title: string, desc: string) {
    const todo = this.todoRepo.addTodo(title, desc);
    $("#content").append("<br>Added " + todo.toString());
  }

  renderTodo(){
    FUNC_LOG();

    this.todoRepo.printTodo();
  }
}
$(document).ready(function () {
  // jQuery methods go here...
  console.log("APP BEGIN");
  Application.app.initApp();

  if (_DEBUG_) {
    console.warn('Extra logging');
  }

  $("#btnTest").on("click", function () {
    console.log("BTN CLICKED");
    Application.app.renderTodo();
  })
});
