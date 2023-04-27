import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "./store";

import App from "./App";
import "./assets/css/index.less";
import "normalize.css";
import Theme from "assets/theme/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="正在加载">
    {/* 共享 store */}
    <Provider store={store}>
      {/* 设置主题颜色 */}
      <ThemeProvider theme={Theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
