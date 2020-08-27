import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@testing-library/jest-dom";


test("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App></App>, div);
});
