import "./styles/index.scss";

import { FUNC_LOG } from "application/utilities/zLog";
import { TodoViewController } from "application/views/todo/todoViewController";
import { TodoCompletedViewController } from "application/views/todoCompleted/todoCompletedViewController";

export class Application {
  static app = new Application();

  todoVC = new TodoViewController();
  todoCompletedVC = new TodoCompletedViewController();

  constructor() {}

  //INIT APP
  initApp() {
    FUNC_LOG();

    this._initUIEvent();
    this.todoVC.viewDidLoaded();
    this.todoCompletedVC.viewDidLoaded();
  }

  private _initUIEvent() {
    //use () => { due to scope of "this"
    $("#btnTest").on("click", () => {
      this._onBtnTest_Clicked();
    });
  }

  //UI EVENT
  private _onBtnTest_Clicked() {
    console.log("BTN CLICKED");

    try {
      // this.dummy222();
    } catch (error) {
      if (error instanceof Error) {
        console.error("EXCEPTION !!! " + error.message);
      }
    }
  }

  // dummy222() {
  //   console.log("DUUUUDUDU");
  //   throw new Error("OMG");
  // }
}
$(document).ready(function () {
  // jQuery methods go here...
  console.log("****************APP BEGIN****************");
  console.log("****************VERSION: " + _APP_VERSION_ + "****************");

  Application.app.initApp();
});
