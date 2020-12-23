import App from "./App";
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

function setup() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
