import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  // Component는 React의 클래스
  render() {
    // class 내에서 함수는 function이라는 키워드 안적어도됨
    return (
      // 하나의 최상위 태그만 써야 함
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  // TOC: Table of contents. 목차
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

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
