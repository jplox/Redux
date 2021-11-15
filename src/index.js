import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    {/* value is like a prop here */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
