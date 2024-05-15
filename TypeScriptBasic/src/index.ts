import { Application } from "application/app";
import "./styles/index.scss";

$(document).ready(function () {
  console.table({
    "RUN MODE": _DEBUG_ ? "DEBUG MODE" : "RELEASE MODE",
    "APP VERSION": _APP_VERSION_,
  });

  Application._app._initApp();
});
