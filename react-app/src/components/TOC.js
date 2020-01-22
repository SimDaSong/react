import React, { Component } from "react"; // 필수로 넣기

class TOC extends Component {
    // TOC: Table of contents. 목차
    render() {
      var lists = [];
      var data = this.props.data;
      for (var i = 0; i < data.length; i++) {
        lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
      }
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

  export default TOC; // 다른 파일에서 TOC를 클래스를 가져다 사용할 수 있게 됨.