import { ZMidiManager } from "./core/midi/midiManager";
import { FUNC_LOG } from "./utilities/zLog";
import { ZMainViewController } from "./views/mainView/mainViewController";
import { ZTodoViewController } from "./views/todo/todoViewController";
import { ZTodoCompletedViewController } from "./views/todoCompleted/todoCompletedViewController";

export class Application {
  static _app = new Application();
  readonly mainView: ZMainViewController;

  constructor() {
    this.mainView = new ZMainViewController();
  }

  //INIT APP
  _initApp() {
    FUNC_LOG();

    //perform init something

    console.log("INIT APP DONE");

    this.mainView._viewDidLoaded();
  }
}
