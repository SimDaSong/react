import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import "./App.css";

class App extends Component {
  // Component는 React의 클래스
  constructor(props) {
    // render() 함수보다 먼저 실행되면서, Component를 초기화 해주고 싶은 코드는 여기 씀
    super(props);
    this.state = {
      // state 값 초기화
      subject: { title: "WEB", sub: "World Wide Web" } // state 값
    };
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title} // 상위 컴포넌트인 App의 상태를 하위 컴포넌트인 Subject로 전달하고 싶을 땐 상위 컴포넌트의 state 값을 하위 컴포넌트의 props의 값으로 전달하는 것은 얼마든지 가능하다.
          sub={this.state.subject.sub}
        ></Subject>
        <TOC></TOC>
        <Content
          title="HTML"
          desc="HTML is HyperText MarkUp Language."
        ></Content>
      </div>
    );
  }
}

export default App;
