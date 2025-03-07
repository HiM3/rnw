import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
// import store from './Redux/Store.js'
import {store,  persistor } from "./Redux-Toolkit/Store.js";
import { PersistGate } from "redux-persist/integration/react";
// import CounterTool from './Redux-Toolkit/CounterTool.jsx'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
