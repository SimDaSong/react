import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject"
import "./App.css";

class App extends Component {
  // Component는 React의 클래스
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText MarkUp Language."></Content>
      </div>
    );
  }
}

export default App;
