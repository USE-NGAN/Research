"use strict";
(self["webpackChunkts_basic"] = self["webpackChunkts_basic"] || []).push([[753],{

/***/ 650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TodoRepo = void 0;
const todoItem_1 = __webpack_require__(853);
const zLog_1 = __webpack_require__(83);
class TodoRepo {
    constructor() {
        this.todoList = [];
    }
    addTodo(title, description) {
        (0, zLog_1.FUNC_LOG)();
        const todo = new todoItem_1.Todo(title, description);
        this.todoList.unshift(todo);
        //add new todo for data hahahaha
        return todo;
    }
    printTodo() {
        (0, zLog_1.FUNC_LOG)();
        for (let index = 0; index < this.todoList.length; index++) {
            const element = this.todoList[index];
            console.log(element.toString());
        }
    }
}
exports.TodoRepo = TodoRepo;


/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Todo = void 0;
const zLog_1 = __webpack_require__(83);
class Todo {
    constructor(title, description) {
        this.id = this.generateId();
        this.title = title;
        this.description = description || "";
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    generateId() {
        (0, zLog_1.FUNC_LOG)();
        // Generate a unique identifier for each Todo instance
        let val = Todo.globalID;
        Todo.globalID++;
        return val.toString();
    }
    markAsCompleted() {
        this.completed = true;
        this.updatedAt = new Date();
    }
    /**
     * get text from todo
     * @returns description of a todo
     */
    toString() {
        return `TODO #${this.id}\t${this.title}\t${this.description}\t${this.updatedAt}\t${this.completed}`;
    }
}
exports.Todo = Todo;
Todo.globalID = 0;


/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
// import jquery = require("jquery");
const { v4: uuidv4 } = __webpack_require__(831);
const zLog_1 = __webpack_require__(83);
// import { FUNC_LOG } from "./utilities/zLog";
// import { getFuncName } from "./utilities/zLog";
const todoRepo_1 = __webpack_require__(650);
// this helps TypeScript to understand jQuery best !!!  otherwise It will confused .
// const $: JQueryStatic = jquery;
class Application {
    constructor() {
        this.todoRepo = new todoRepo_1.TodoRepo();
    }
    //   @named
    initApp() {
        (0, zLog_1.FUNC_LOG)();
        this.addTodo("TITLE", "DESC");
        this.addTodo("TITLE2", "DESC2");
        let v4 = uuidv4();
        // console.log(`UUID = ${v4}`);
        // console.log(chalk.red(`UUID = ${v4}`))
    }
    addTodo(title, desc) {
        const todo = this.todoRepo.addTodo(title, desc);
        $("#content").append("<br>Added " + todo.toString());
    }
    renderTodo() {
        (0, zLog_1.FUNC_LOG)();
        this.todoRepo.printTodo();
    }
}
__webpack_unused_export__ = Application;
Application.app = new Application();
$(document).ready(function () {
    // jQuery methods go here...
    console.log("APP BEGIN");
    Application.app.initApp();
    if (true) {
        console.warn('Extra logging');
    }
    $("#btnTest").on("click", function () {
        console.log("BTN CLICKED");
        Application.app.renderTodo();
    });
});


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FUNC_LOG = void 0;
// import chalk from "chalk";
function getName(d) {
    const error = new Error();
    if (error.stack == null) {
        return "";
    }
    // const firefoxMatch = (error.stack.split('\n')[0 + d].match(/^.*(?=@)/) || [])[0];
    // const chromeMatch = ((((error.stack.split('at ') || [])[1 + d] || '').match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '').split('.').pop();
    // const safariMatch = error.stack.split('\n')[0 + d];
    const firefoxMatch = error.stack.split('\n')[0 + d];
    const chromeMatch = error.stack.split('at ')[1 + d];
    const safariMatch = error.stack.split('\n')[0 + d];
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
function FUNC_LOG() {
    console.log("   %cENTER:", "color:white; background-color:purple;", getName(3));
}
exports.FUNC_LOG = FUNC_LOG;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [96], () => (__webpack_exec__(156)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=hello.0d07e85b36398d414f03.js.map