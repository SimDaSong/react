# memo

## 1. 개발환경 세팅
https://ko.reactjs.org/docs/getting-started.html#learn-react

**1. online playground**: 온라인 코드 편집기. 코드를 실행하고 해당 코드의 실행 화면을 확인 가능

**2. 웹사이트에 React를 추가하기**: 웹사이트에 부분적으로 기능 추가하기. 초보자에게는 비추천

**3. 새 React 앱 만들기**: toolchain(리액트 앱 목표를 달성하기 위해 필요한 것들을 제공해주는 것). 우리는 *Create React App*이라는 툴체인을 이용할 것

## 2. 앱 실행

* `$ npm [start] run` : 앱 실행

* 실행을 끄고 싶을 땐 `^C`

## 3. 디렉터리

* public: index.html 파일이 들어 있는 곳. 
* id가 root인 태그 안쪽에 react의 component들이 들어감
* 이 component들은 src 내에 있는 파일들
* index.js라는 파일 내에서는 id값이 root인 태그를 선택하는 부분이 중요. root를 다른 걸로 바꾸면 이 파일도 바꾸면 됨. 또한 App이라는 부분도 있는데, 이게 리액트르 이용하여 만든 사용자 정의 컴포넌트이며, 이 앱의 실제 구현은 ./App에. App뒤에는 .js가 생략되어 있는 것
* App.js의 실제 태그의 내용은 <div> 부터. 따라서 개발할 때에는 이 사이의 내용을 수정하면 됨.
* App.js는 사용자 정의 태그. 컴포넌트
  
* **CSS**는 index.js 파일 내에 index.css라는 파일이 있는데, 이걸 수정하면 됨.

## 4. reload

앞으로 리로드를 할 때에는 **Empty Cache and Hard Reload** 옵션으로 리로드를 할 것. 캐시를 다 지워줌.
리액트는 개발의 편의성을 위해 여러 기능들을 추가해 놓은 상태이기 때문에 create app의 개발 환경은 파일이 무거움. 
create react app은 개발환경을 실행시킬 대 npm runn start를 썼는데, production mode의 앱을 빌드할 때에는 `npm run build`를 누르고 엔터를 치면, 이전에는 없었던 build라는 파일이 포함될 것. 이 디렉터리 내에 index.html 파일이 있는데, 공백이 하나도 없는 상태. 이는 실제 production 환경의 앱을 만들기 위해 불필요 하게 용량을 차지하는 것들을 지워줌. 이외의 여러 파일들도 용량을 줄여주거나 함.

실제로 서비스를 할 때에는 build 내의 파일을 쓰면 된다. 

## 5. Component 만들기

실제 tag를 보고 싶으면 element 탭을 쓰면 되고 
리액트 상의 컴포넌트를 보고 싶으면 react라는 탭을 선택하면 됨


## 6. State

* 사용자 입장에서 제품을 조작하는 장치는 UI. => react의 관점에서의 props
Component를 만들고, 이의 기본적인 동작을 바꾸고 싶을 때 사용자에게 제공하는 것이 태그의 속성에 해당하는 props. => 사용자가 컴포넌트를 조작할 수 있게 됨


* 내부적으로 제품을 조작하는 것은 State
Component 내부적으로 활용되는 것들이 State. 

좀 더 다양한 Component를 만들기 위한 것이 State이며 이 과정에서 props를 더 잘 이해하게 될 것.

* **constructor()**:  render() 함수보다 먼저 실행되면서, Component를 초기화 해주고 싶은 코드는 여기 씀

* App.js 파일을 사용하는 파일은 index.js 파일. index.js 내에 App이라는 컴포넌트를 실행하는 코드가 있는데, 우리는 state값이 subject인지 모른다는 게 줒요함.
외부에서 어떻게 사용되는지 모른다는 게 중요함. 
App이 내부적으로 활용될 땐 state를 사용하여 활용됨. 

* `lists.push(<li><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);` 처럼 여러 개의 element를 자동으로 생성하는 경우에는 console 상에서 에러가 발생할 것.
=> 각 항목들은 key라는 props를 가져야 한다.

=> `lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);`: react가 원해서 사용하는 것

## 7. event

* props, state, event는 서로 상호작용하면서 app의 역동성을 만들어줌

* props 값이나 state 값이 바뀌면 해당 클래스 내의 render() 함수가 호출되고, render() 함수 내 component들의 render()함수도 다 호출 됨 => 화면이 다시 그려짐
  
* render() 함수는 어떤 html이 그려질지 설명해줌

* 크롬 개발자 도구를 쓸 때, `debegger`라고 치면, 실행이 멈추고 sources로 이동해서 우리가 원하는 정보를 쉽게 얻을 수 있게 해줌

* `e.preventDefault();`: a 태그의 기본적인 동작 방법을 지움

* *this를 찾을 수 없다는 에러*가 발생하면, 해당 함수가 끝난 직후에 `.bind(this)` 코드를 써준다.

* bind, set state 해줘야 함. => 몰라도 되는데 아는 게 좋음

## 8. bind 함수

* **render()** 함수 내에서 this는 render 함수가 속해있는 component 자체를 가리키는데, onclick 내 함수는 this가 아무 값도 없음. => 강제로 this값을 주입

* bind 함수의 첫 번째 인자로 변수를 주면 bind라는 함수로 인해 bind를 호출한 함수의 this는 bind 함수의 첫 번째 인자가 됨
function().bind(hi); // function 함수 내에서의 this는 hi

* state 값을 바꿀 때에는 *setState 함수*내에 인자로 바꿀 값을 전달

## 9. 컴포넌트 이벤트 만들기

* event 객체는 target이라는 속성이 있는데, 이건 이 이벤트가 발생한 태그를 가리킴