import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./seriveWorker";
import Store from "./store";

ReactDOM.render(
 <Store>
   <App />
</Store>
document.getElementById("root")


);

serviceWorker.unregister();