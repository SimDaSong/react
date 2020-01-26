import React, { Component } from "react";

class Subject extends Component {
    // Component는 React의 클래스
    render() {
        // class 내에서 함수는 function이라는 키워드 안적어도됨
        return (
            // 하나의 최상위 태그만 써야 함
            <header>
                <h1><a href="/" onClick={function(e){
                    e.preventDefault(); // 링크를 클릭 했을 때 페이지가 바뀌는 것을 막음
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1> 
                {this.props.sub}
            </header>
        );
    }
}
  
export default Subject;