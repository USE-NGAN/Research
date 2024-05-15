import { ZMidiManagerIF, ZMidiManager, ZMidiManagerState } from "application/core/midi/midiManager";

import { ZTodoViewController } from "../todo/todoViewController";
import { ZTodoCompletedViewController } from "../todoCompleted/todoCompletedViewController";
import { FUNC_LOG } from "application/utilities/zLog";

export class ZMainViewController implements ZMidiManagerIF {
  _todoVC = new ZTodoViewController();
  _todoCompletedVC = new ZTodoCompletedViewController();

  _midi: ZMidiManager;

  constructor() {
    this._midi = new ZMidiManager(this);
  }

  _viewDidLoaded() {
    FUNC_LOG();

    this._initUIEvent();
    this._todoVC._viewDidLoaded();
    this._todoCompletedVC._viewDidLoaded();

    this._midi.startMidi();
  }

  onConnectionChanged(midiManager: ZMidiManager): void {
    FUNC_LOG();

    if (midiManager.connectionState === ZMidiManagerState.FOUND_DEVICE) {
      midiManager._startConnect();
    }
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
}
