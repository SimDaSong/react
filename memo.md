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
