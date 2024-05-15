import { LOG } from "application/utilities/zLog";
import { EventDispatcher } from "strongly-typed-events";

export class ZMidiManager {
  constructor(delegate: ZMidiManagerIF) {
    this.delegate = delegate;
  }

  private readonly TAG = "[MIDI] ";
  private readonly MANUFACTORER = "ZOOM Corporation";

  private _midiInput?: MIDIInput;
  private _midiOutput?: MIDIOutput;

  private _connectionState = ZMidiManagerState.DISCONNECTED;
  public get connectionState() {
    return this._connectionState;
  }

  delegate: ZMidiManagerIF;

  public async startMidi() {
    LOG(this.TAG, "start MIDI");

    // 1. PERMISSION?
    const permission = await navigator.permissions.query({
      name: "midi" as PermissionName,
    });

    if (permission.state === "denied") {
      LOG(this.TAG, "NO PERMISSION MIDI");
      return;
    }

    // 2. MIDI ACCESS
    navigator.requestMIDIAccess().then((access) => {
      LOG(this.TAG, "MIDI ACCESS OK. NUM OF DEV=" + access.inputs.size);

      access.addEventListener("statechange", (event) => {
        this._onMidiPortChanged(event);
      });
    });
  }

  /**
   * When device connected/disconnected from PC, this callback is called
   * @param event event info
   */
  private _onMidiPortChanged(event: Event) {
    if (event instanceof MIDIConnectionEvent && event.target instanceof MIDIAccess && event.port != undefined) {
      const midiPort = event.port;
      LOG(this.TAG, `PORT INFO ` + this._midiPortToString(midiPort));

      if (midiPort instanceof MIDIInput) {
        if (midiPort.state === "connected") {
          this._midiInput = midiPort;
        } else {
          this._midiInput = undefined;
        }
      } else if (midiPort instanceof MIDIOutput) {
        if (midiPort.state === "connected") {
          this._midiOutput = midiPort;
        } else {
          this._midiOutput = undefined;
        }
      }

      if (this._midiInput && this._midiOutput) {
        this._foundDevice();
      } else if (this._midiInput == undefined && midiPort instanceof MIDIInput) {
        this._lostDevice();
      }
    }
  }
  private _lostDevice() {
    console.log("❌❌❌❌❌❌❌DISCONNECTED❌❌❌❌❌❌❌");

    this.changeConnectionState(ZMidiManagerState.DISCONNECTED);
    this.delegate.onConnectionChanged(this);
  }

  private _foundDevice() {
    if (this._midiInput == undefined || this._midiOutput == undefined) {
      return;
    }
    console.log("✅✅✅✅✅✅✅FOUND✅✅✅✅✅✅✅");

    console.log("INPUT PORT " + this._midiPortToString(this._midiInput));
    console.log("OUTPUT PORT " + this._midiPortToString(this._midiOutput));

    if (this._midiInput?.manufacturer === this.MANUFACTORER) {
      this.changeConnectionState(ZMidiManagerState.FOUND_DEVICE);
      this.delegate.onConnectionChanged(this);
    }
  }

  /**
   * Perform connect if app has found a device
   */
  public _startConnect(): void {
    if (this._connectionState != ZMidiManagerState.FOUND_DEVICE) {
      return;
    }

    this.changeConnectionState(ZMidiManagerState.CONNECTING);

    setTimeout(() => {
      if (this._connectionState === ZMidiManagerState.CONNECTING) {
        this.changeConnectionState(ZMidiManagerState.CONNNECTED);
      }
    }, 3000);
  }

  private _startConnectToMidi() {}

  // #region HELPER METHODS
  private changeConnectionState(newState: ZMidiManagerState) {
    if (this._connectionState != newState) {
      LOG(this.TAG, `CHANGE STATE ${this._state2String(this._connectionState)} -> ${this._state2String(newState)}`);
      this._connectionState = newState;
    }
  }

  private _midiPortToString(port: MIDIPort): string {
    return `\n MANUFACTURER: ${port.manufacturer}\n NAME: ${port.name}\n STATE: ${port.state}`;
  }

  private _state2String(state: ZMidiManagerState): string {
    return ZMidiManagerState[state];
  }
  // #endregion HELPER METHODS
  //   readonly repairAsync = (waitTime: number) =>
  //     new Promise((resolve) => {
  //       console.log("REPAIR BEGIN INSIDE PROMISE " + waitTime);

  //       console.log("DONE REPAIR " + waitTime);
  //       setTimeout(() => {
  //         resolve("修理しました");
  //       }, waitTime);
  //     });

  //   readonly paymentAsync = (waitTime: number) =>
  //     new Promise((resolve) => {
  //       console.log("PAYMENT BEGIN INSIDE PROMISE");

  //       setTimeout(() => {
  //         resolve("送金しました");
  //       }, waitTime);
  //     });
}

export interface ZMidiManagerIF {
  onConnectionChanged(midiManager: ZMidiManager): void;
}

export enum ZMidiManagerState {
  FOUND_DEVICE, //found device, but not start CONNECT sequence yet
  CONNECTING, //start CONNECT sequence
  CONNNECTED, //finish CONNECT sequence
  DISCONNECTED,
}
