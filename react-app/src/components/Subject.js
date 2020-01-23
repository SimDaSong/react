import React, { Component } from "react";

class Subject extends Component {
    // Component는 React의 클래스
    render() {
        // class 내에서 함수는 function이라는 키워드 안적어도됨
        return (
            // 하나의 최상위 태그만 써야 함
            <header>
                <h1><a href="/">{this.props.title}</a></h1> 
                {this.props.sub}
            </header>
        );
    }
}
  
export default Subject;