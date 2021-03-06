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
      mode: "read", // 현재 내가 어떤 상태인지 알기 위함
      selected_content_id: 1,
      welcome: { title: "welcome", desc: "Hello, react!!!" }, // 현재 내 상태가 welcome일때
      subject: { title: "WEB", sub: "World Wide Web" }, // subject라는 property에 값 하나.
      contents: [
        // TOC의 부모가 가지고 있는 state를 이용해서 TOC의 내부 내용이 바뀌도록 할 것
        { id: 1, title: "HTML", desc: "HTML is HyperText ..." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    };
  }

  render() {
    // state 값이 바뀌면 render() 함수가 호출되고, render() 함수 내 component들의 render()함수도 다 호출 됨
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      for (var i=0; i<this.state.contents.length; i++) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject // 이 컴포넌트 내에서 사용자가 링크를 클릭 했을 때, onChangePage 이벤트를 이벤트가 일어나도록
          title={this.state.subject.title} // 상위 컴포넌트인 App의 상태를 하위 컴포넌트인 Subject로 전달하고 싶을 땐 상위 컴포넌트의 state 값을 하위 컴포넌트의 props의 값으로 전달하는 것은 얼마든지 가능하다.
          sub={this.state.subject.sub}
          onChangePage={function() {
            // props 형태로 Subject로 전달됨
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selected_content_id: Number(id) // id로 넘어 오는 값은 문자
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
