import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import "./assets/css/index.less";
import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="正在加载">
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
);
