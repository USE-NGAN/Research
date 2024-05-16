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

  // #region ENTRY POINT
  _viewDidLoaded() {
    FUNC_LOG();

    this._initUIEvent();
    this._todoVC._viewDidLoaded();
    this._todoCompletedVC._viewDidLoaded();

    console.log("AAAAAA");

    this._midi
      .startMidi()
      .then((result) => {
        // if (result === "granted") {
        //   console.log("startMidi OK");
        // } else {
        //   console.log("startMidi FAILED MISERABLE");
        // }
        switch (result) {
          case "denied":
            console.log("startMidi FAILED MISERABLE");
            break;
          case "prompt":
            console.log("startMidi WAIT FOR PERMISSION");
            break;
          case "granted":
            console.log("startMidi OK");
            break;

          default:
            break;
        }
      })
      .catch(() => {
        console.log("startMidi FAILED MISERABLE22222");
      });
    console.log("BBBBB");
  }
  // #endregion ENTRY POINT

  // #region UI INIT
  private _initUIEvent() {
    //use () => { due to scope of "this"
    $("#btnTest").on("click", () => {
      this._onBtnTest_Clicked();
    });
  }
  // #endregion UI INIT

  // #region MIDIManager Callback
  /**
   * When detect ZOMM MIDI device, this callback will called
   * @param midiManager The Midi Manager
   */
  onConnectionChanged(midiManager: ZMidiManager): void {
    FUNC_LOG();

    if (midiManager.connectionState === ZMidiManagerState.FOUND_DEVICE) {
      midiManager._startConnect();
    }
  }
  // #endregion MIDIManager Callback

  // #region UI EVENT
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
  // #endregion UI EVENT
}
