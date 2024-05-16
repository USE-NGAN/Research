"use strict";
(self["webpackChunkts_basic"] = self["webpackChunkts_basic"] || []).push([[57],{

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Application = void 0;
const zLog_1 = __webpack_require__(916);
const mainViewController_1 = __webpack_require__(237);
class Application {
    constructor() {
        this.mainView = new mainViewController_1.ZMainViewController();
    }
    //INIT APP
    _initApp() {
        (0, zLog_1.FUNC_LOG)();
        //perform init something
        console.log("INIT APP DONE");
        this.mainView._viewDidLoaded();
    }
}
exports.Application = Application;
Application._app = new Application();


/***/ }),

/***/ 575:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodoRepo = void 0;
const todoItem_1 = __webpack_require__(186);
const zLog_1 = __webpack_require__(916);
class ZTodoRepo {
    constructor() {
        this._todoList = [];
    }
    _addTodo(title, description) {
        (0, zLog_1.FUNC_LOG)();
        const todo = new todoItem_1.ZTodo(title, description);
        this._todoList.unshift(todo);
        //add new todo for data hahahaha
        return todo;
    }
    _buildDummyData() {
        (0, zLog_1.FUNC_LOG)();
        for (let i = 0; i < 10; i++) {
            let todo = new todoItem_1.ZTodo("Task " + i, "Desc Task " + i);
            this._todoList.push(todo);
        }
    }
    _buildDummyDataCompleted() {
        (0, zLog_1.FUNC_LOG)();
        for (let i = 20; i < 30; i++) {
            let todo = new todoItem_1.ZTodo("Task " + i, "Desc Task " + i);
            todo._markAsCompleted();
            this._todoList.push(todo);
        }
    }
    _printTodo() {
        (0, zLog_1.FUNC_LOG)();
        for (let index = 0; index < this._todoList.length; index++) {
            const element = this._todoList[index];
            console.log(element._toString());
        }
    }
    _deleteTodo(todo) {
        const idx = this._todoList.indexOf(todo);
        if (idx !== -1) {
            this._todoList.splice(idx, 1);
        }
    }
}
exports.ZTodoRepo = ZTodoRepo;


/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodo = void 0;
class ZTodo {
    constructor(title, description) {
        this._id = this._generateId();
        this._title = title;
        this._description = description || "";
        this._completed = false;
        this._createdAt = new Date();
        this._updatedAt = new Date();
    }
    _generateId() {
        // FUNC_LOG();
        // Generate a unique identifier for each Todo instance
        let val = ZTodo.globalID;
        ZTodo.globalID++;
        return val.toString();
    }
    _markAsCompleted() {
        this._completed = true;
        this._updatedAt = new Date();
    }
    /**
     * get text from todo
     * @returns description of a todo
     */
    _toString() {
        return `TODO #${this._id}\t${this._title}\t${this._description}\t${this._updatedAt}\t${this._completed}`;
    }
}
exports.ZTodo = ZTodo;
ZTodo.globalID = 0;


/***/ }),

/***/ 579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZMidiManagerState = exports.ZMidiManager = void 0;
const zLog_1 = __webpack_require__(916);
class ZMidiManager {
    constructor(delegate) {
        this.TAG = "[MIDI] ";
        this.MANUFACTORER = "ZOOM Corporation";
        this._connectionState = ZMidiManagerState.DISCONNECTED;
        this.delegate = delegate;
    }
    get connectionState() {
        return this._connectionState;
    }
    startMidi() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, zLog_1.LOG)(this.TAG, "start MIDI");
            // 1. PERMISSION?
            const permission = yield navigator.permissions.query({
                name: "midi",
            });
            if (permission.state === "denied") {
                (0, zLog_1.LOG)(this.TAG, "NO PERMISSION MIDI");
                return false;
            }
            // 2. MIDI ACCESS
            let access = yield navigator.requestMIDIAccess();
            (0, zLog_1.LOG)(this.TAG, "MIDI ACCESS OK. NUM OF DEV=" + access.inputs.size);
            access.addEventListener("statechange", (event) => {
                this._onMidiPortChanged(event);
            });
            return true;
        });
    }
    abcd() {
        return __awaiter(this, void 0, void 0, function* () {
            // const permission = await navigator.permissions.query({
            //   name: "midi" as PermissionName,
            // });
            const me = this;
            return new Promise(function (resolve, reject) {
                // if (permission.state === "denied") {
                //   // LOG(this.TAG, "NO PERMISSION MIDI");
                //   reject(false);
                //   return;
                // }
                navigator.permissions
                    .query({
                    name: "midi",
                })
                    .then((permission) => {
                    if (permission.state === "denied") {
                        reject("NO PERMISSION MIDI");
                        return;
                    }
                    navigator
                        .requestMIDIAccess()
                        .then((access) => () => {
                        (0, zLog_1.LOG)(me.TAG, "MIDI ACCESS OK. NUM OF DEV=" + access.inputs.size);
                        access.addEventListener("statechange", (event) => {
                            me._onMidiPortChanged(event);
                        });
                        resolve("MIDI OKOKOKOKOKOKO");
                    })
                        .catch(() => {
                        reject("NO MIDI ACCESSS");
                    });
                })
                    .catch(() => {
                    reject("FAIL MIDI PERMISSION");
                });
            });
        });
    }
    /**
     * When device connected/disconnected from PC, this callback is called
     * @param event event info
     */
    _onMidiPortChanged(event) {
        if (event instanceof MIDIConnectionEvent && event.target instanceof MIDIAccess && event.port != undefined) {
            const midiPort = event.port;
            (0, zLog_1.LOG)(this.TAG, `PORT INFO ` + this._midiPortToString(midiPort));
            if (midiPort instanceof MIDIInput) {
                if (midiPort.state === "connected") {
                    this._midiInput = midiPort;
                }
                else {
                    this._midiInput = undefined;
                }
            }
            else if (midiPort instanceof MIDIOutput) {
                if (midiPort.state === "connected") {
                    this._midiOutput = midiPort;
                }
                else {
                    this._midiOutput = undefined;
                }
            }
            if (this._midiInput && this._midiOutput) {
                this._foundDevice();
            }
            else if (this._midiInput == undefined && midiPort instanceof MIDIInput) {
                this._lostDevice();
            }
        }
    }
    _lostDevice() {
        console.log("❌❌❌❌❌❌❌DISCONNECTED❌❌❌❌❌❌❌");
        this.changeConnectionState(ZMidiManagerState.DISCONNECTED);
        this.delegate.onConnectionChanged(this);
    }
    _foundDevice() {
        var _a;
        if (this._midiInput == undefined || this._midiOutput == undefined) {
            return;
        }
        console.log("✅✅✅✅✅✅✅FOUND✅✅✅✅✅✅✅");
        console.log("INPUT PORT " + this._midiPortToString(this._midiInput));
        console.log("OUTPUT PORT " + this._midiPortToString(this._midiOutput));
        if (((_a = this._midiInput) === null || _a === void 0 ? void 0 : _a.manufacturer) === this.MANUFACTORER) {
            this.changeConnectionState(ZMidiManagerState.FOUND_DEVICE);
            this.delegate.onConnectionChanged(this);
        }
    }
    /**
     * Perform connect if app has found a device
     */
    _startConnect() {
        if (this._connectionState != ZMidiManagerState.FOUND_DEVICE) {
            return;
        }
        console.group("MIDI CONNECTION SEQUENCE");
        this.changeConnectionState(ZMidiManagerState.CONNECTING);
        setTimeout(() => {
            if (this._connectionState === ZMidiManagerState.CONNECTING) {
                this.changeConnectionState(ZMidiManagerState.CONNNECTED);
            }
            console.groupEnd();
        }, 3000);
    }
    _startConnectToMidi() { }
    // #region HELPER METHODS
    changeConnectionState(newState) {
        if (this._connectionState != newState) {
            (0, zLog_1.LOG)(this.TAG, `CHANGE STATE ${this._state2String(this._connectionState)} -> ${this._state2String(newState)}`);
            this._connectionState = newState;
        }
    }
    _midiPortToString(port) {
        return `\n MANUFACTURER: ${port.manufacturer}\n NAME: ${port.name}\n STATE: ${port.state}`;
    }
    _state2String(state) {
        return ZMidiManagerState[state];
    }
}
exports.ZMidiManager = ZMidiManager;
var ZMidiManagerState;
(function (ZMidiManagerState) {
    ZMidiManagerState[ZMidiManagerState["FOUND_DEVICE"] = 0] = "FOUND_DEVICE";
    ZMidiManagerState[ZMidiManagerState["CONNECTING"] = 1] = "CONNECTING";
    ZMidiManagerState[ZMidiManagerState["CONNNECTED"] = 2] = "CONNNECTED";
    ZMidiManagerState[ZMidiManagerState["DISCONNECTED"] = 3] = "DISCONNECTED";
})(ZMidiManagerState || (exports.ZMidiManagerState = ZMidiManagerState = {}));


/***/ }),

/***/ 916:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FUNC_LOG = exports.LOG = void 0;
// import chalk from "chalk";
function getName(d) {
    const error = new Error();
    if (error.stack == null) {
        return "";
    }
    // const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
    // const chromeMatch = ((((error.stack.split('at ') || [])[1 + d] || '').match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '').split('.').pop();
    // const safariMatch = error.stack.split('\n')[0 + d];
    const firefoxMatch = error.stack.split("\n")[0 + d];
    const chromeMatch = error.stack.split("at ")[1 + d];
    const safariMatch = error.stack.split("\n")[0 + d];
    // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
    // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
    // safariMatch ? console.log('safariMatch', safariMatch) : void 0;
    let res = firefoxMatch || chromeMatch || safariMatch;
    res = res.replace("at", "");
    res = res.trim();
    const idxOfPathent = res.indexOf("(");
    if (idxOfPathent == -1) {
        return "";
    }
    return res.substring(0, idxOfPathent);
}
function LOG(tag, message) {
    console.log(`${tag}\t${message}`);
}
exports.LOG = LOG;
function FUNC_LOG() {
    console.log("   %cENTER:", "color:white; background-color:purple;", getName(3));
}
exports.FUNC_LOG = FUNC_LOG;


/***/ }),

/***/ 237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZMainViewController = void 0;
const midiManager_1 = __webpack_require__(579);
const todoViewController_1 = __webpack_require__(632);
const todoCompletedViewController_1 = __webpack_require__(970);
const zLog_1 = __webpack_require__(916);
class ZMainViewController {
    constructor() {
        this._todoVC = new todoViewController_1.ZTodoViewController();
        this._todoCompletedVC = new todoCompletedViewController_1.ZTodoCompletedViewController();
        this._midi = new midiManager_1.ZMidiManager(this);
    }
    // #region ENTRY POINT
    _viewDidLoaded() {
        (0, zLog_1.FUNC_LOG)();
        this._initUIEvent();
        this._todoVC._viewDidLoaded();
        this._todoCompletedVC._viewDidLoaded();
        console.log("AAAAAA");
        this._midi.startMidi().then((result) => {
            if (result) {
                console.log("startMidi OK");
            }
            else {
                console.log("startMidi FAILED MISERABLE");
            }
        });
        console.log("BBBBB");
    }
    // #endregion ENTRY POINT
    // #region UI INIT
    _initUIEvent() {
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
    onConnectionChanged(midiManager) {
        (0, zLog_1.FUNC_LOG)();
        if (midiManager.connectionState === midiManager_1.ZMidiManagerState.FOUND_DEVICE) {
            midiManager._startConnect();
        }
    }
    // #endregion MIDIManager Callback
    // #region UI EVENT
    _onBtnTest_Clicked() {
        console.log("BTN CLICKED");
        try {
            // this.dummy222();
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("EXCEPTION !!! " + error.message);
            }
        }
    }
}
exports.ZMainViewController = ZMainViewController;


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodoView = void 0;
const zLog_1 = __webpack_require__(916);
class ZTodoView {
    constructor(delegate) {
        this._delegate = delegate;
        this._table = $("#tblTodo");
        this._table.on("click", "tr", function () {
            const row = $(this);
            console.log("CLICKED ON ROW " + row.attr("id") + "|" + row.attr("todoID"));
        });
    }
    /**
     * Render all todo item to table
     * @param todoList list of todo item to draw
     */
    _render(todoList) {
        const body = this._table.children("tbody");
        body.empty();
        todoList.forEach((todo) => {
            const rowID = "todo-" + todo._id;
            var newRow = $("<tr>");
            newRow.attr("id", rowID);
            newRow.attr("todoID", todo._id);
            newRow.append($("<td>").text(todo._title));
            // Add delete button
            const btnDelete = $("<button>")
                .text("Delete")
                .on("click", () => {
                this._btnDelete_Clicked(todo);
            });
            newRow.append($("<td>").append(btnDelete));
            // Add Complete button
            const btnCompleted = $("<button>")
                .text("Completed")
                .on("click", () => {
                this._btnMarkAsCompleted_Clicked(todo);
            });
            newRow.append($("<td>").append(btnCompleted));
            body.append(newRow);
        });
    }
    // #region UI Event
    /**
     * Delete a todo item from reposite and update UI
     * @param todo todo item to delete
     */
    _btnDelete_Clicked(todo) {
        (0, zLog_1.FUNC_LOG)();
        this._delegate._requestDelete(todo);
    }
    _btnMarkAsCompleted_Clicked(todo) {
        (0, zLog_1.FUNC_LOG)();
        this._delegate._requestMarkCompleted(todo);
    }
    // #endregion UI Event
    // #region HELPER
    /**
     * remove row for a todo
     * @param todo todo item to be removed
     */
    _deleteUIRowForTodo(todo) {
        const rowID = "#todo-" + todo._id;
        let row = this._table.find("tbody > " + rowID);
        if (row) {
            row.remove();
        }
    }
}
exports.ZTodoView = ZTodoView;


/***/ }),

/***/ 632:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodoViewController = void 0;
const todoRepo_1 = __webpack_require__(575);
const todoView_1 = __webpack_require__(364);
const zLog_1 = __webpack_require__(916);
class ZTodoViewController {
    constructor() {
        this._todoRepo = new todoRepo_1.ZTodoRepo();
        this._todoView = new todoView_1.ZTodoView(this);
    }
    _viewDidLoaded() {
        (0, zLog_1.FUNC_LOG)();
        this._todoRepo._buildDummyData();
        this._render();
    }
    _render() {
        this._todoView._render(this._todoRepo._todoList);
    }
    // #region TodoView CallBack
    _requestDelete(todo) {
        console.log(`REQUEST DELETE ${todo._title}`);
        this._todoRepo._deleteTodo(todo);
        this._todoView._deleteUIRowForTodo(todo);
    }
    _requestMarkCompleted(todo) {
        console.log(`REQUEST MARK COMPLETED ${todo._title}`);
        todo._markAsCompleted();
        this._todoView._deleteUIRowForTodo(todo);
    }
}
exports.ZTodoViewController = ZTodoViewController;


/***/ }),

/***/ 486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodoCompletedView = void 0;
const zLog_1 = __webpack_require__(916);
class ZTodoCompletedView {
    constructor(delegate) {
        this._table = $("#tblCompleted");
        this._delegate = delegate;
    }
    /**
     * Render all todo item to table
     * @param todoList list of todo item to draw
     */
    _render(todoList) {
        const body = this._table.children("tbody");
        body.empty();
        todoList.forEach((todo) => {
            const rowID = "todo-completed-" + todo._id;
            var newRow = $("<tr>");
            newRow.attr("id", rowID);
            newRow.append($("<td>").text(todo._title));
            // Add delete button
            const btnDelete = $("<button>")
                .text("Delete")
                .on("click", () => {
                this._btnDelete_Clicked(todo);
            });
            newRow.append($("<td>").append(btnDelete));
            // Add Complete button
            const btnRemoveCompleted = $("<button>")
                .text("Un Completed")
                .on("click", () => {
                //   this.btnMarkAsCompleted_Clicked(todo);
            });
            newRow.append($("<td>").append(btnRemoveCompleted));
            body.append(newRow);
        });
    }
    // #region UI Event
    /**
     * Delete a todo item from reposite and update UI
     * @param todo todo item to delete
     */
    _btnDelete_Clicked(todo) {
        (0, zLog_1.FUNC_LOG)();
        this._delegate._requestDelete(todo);
    }
    // #endregion UI Event
    // #region HELPER
    /**
     * remove row for a todo
     * @param todo todo item to be removed
     */
    _deleteUIRowForTodo(todo) {
        const rowID = "#todo-completed-" + todo._id;
        let row = this._table.find("tbody > " + rowID);
        if (row) {
            row.remove();
        }
    }
} // END CLASS TodoCompletedView
exports.ZTodoCompletedView = ZTodoCompletedView;


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZTodoCompletedViewController = void 0;
const todoRepo_1 = __webpack_require__(575);
const zLog_1 = __webpack_require__(916);
const todoCompletedView_1 = __webpack_require__(486);
class ZTodoCompletedViewController {
    constructor() {
        this._todoRepo = new todoRepo_1.ZTodoRepo();
        this._todoView = new todoCompletedView_1.ZTodoCompletedView(this);
    }
    _viewDidLoaded() {
        (0, zLog_1.FUNC_LOG)();
        this._todoRepo._buildDummyDataCompleted();
        this._render();
    }
    _render() {
        this._todoView._render(this._todoRepo._todoList);
    }
    // #region TodoView CallBack
    _requestDelete(todo) {
        console.log(`REQUEST DELETE ${todo._title}`);
        this._todoRepo._deleteTodo(todo);
        this._todoView._deleteUIRowForTodo(todo);
    }
    _requestRemoveCompleted(todo) { }
}
exports.ZTodoCompletedViewController = ZTodoCompletedViewController;


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const app_1 = __webpack_require__(738);
__webpack_require__(394);
$(document).ready(function () {
    console.table({
        "RUN MODE":  true ? "DEBUG MODE" : 0,
        "APP VERSION": "0.0.1",
    });
    app_1.Application._app._initApp();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(156));
/******/ }
]);
//# sourceMappingURL=index.js.map?v=c9468fc736a74b73f730