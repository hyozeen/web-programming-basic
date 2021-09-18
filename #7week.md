# web-programming-basic

## 7 Week

### Javascript (alert, console.log, confirm, prompt)

#### alert (알림창 띄워주는 함수)

```js
  // main.js
  window.onload = function() {
      alert("알림창 입니다.");
  }
```

- ![Screenshot 2021-09-18 at 08 57 15](https://user-images.githubusercontent.com/86503646/133864726-2fb97e7c-6d16-4883-a80e-af18d27d67e1.png)


#### console.log (개발자도구에 메세지를 보여주는 함수)

```js
  // main.js
  window.onload = function() {
      console.log("여기는 시작점입니다.");
  }
```

- ![Screenshot 2021-09-18 at 08 57 49](https://user-images.githubusercontent.com/86503646/133864732-c26449b8-36f8-4817-a8b5-71a831be69b8.png)


#### confirm (확인창 띄워주는 함수)

```js
  // main.js
  window.onload = function() {
      let result = confirm("홈페이지에 접속하시겠습니까?")
      console.log(result);
  }
```

사용자가 확인 또는 취소를 누를때까지 팝업창이 띄워져있습니다.
- ![Screenshot 2021-09-18 at 08 59 11](https://user-images.githubusercontent.com/86503646/133864751-aaba61bd-9a3e-4ae3-9d85-b4ecc9a9c02e.png)

사용자가 `확인` 버튼을 누르면 true, 
- ![Screenshot 2021-09-18 at 08 59 22](https://user-images.githubusercontent.com/86503646/133864756-6fbaf3bf-aa23-41d2-bcd1-561675e51615.png)

`취소` 버튼이나 <kbd>Esc</kbd> 를 누르면 false를 return 합니다.
- ![Screenshot 2021-09-18 at 08 59 41](https://user-images.githubusercontent.com/86503646/133864759-6c683b5b-c8c7-4b1a-8323-de02b5bb2428.png)


#### prompt (질문창 띄워주는 함수)

```js
  // main.js
  window.onload = function() {
      let result = prompt("당신의 이름은 무엇인가요?", "");
      console.log(result);
  }
```

사용자에게 텍스트를 입력하라는 메세지를 띄워줌과 동시에, input 창을 띄워줍니다.
- ![Screenshot 2021-09-18 at 09 05 01](https://user-images.githubusercontent.com/86503646/133864895-03062ba9-cf1b-46fe-aa9b-51cb1938d6c6.png)

`확인` 버튼을 누르면 사용자가 입력한 값을 return 하고,
- ![Screenshot 2021-09-18 at 09 05 59](https://user-images.githubusercontent.com/86503646/133864937-e87b4b1f-a15d-47c2-8acb-e79b09dac6ba.png)

`취소` 버튼이나 <kbd>Esc</kbd> 를 누르면 null을 반환합니다.
- ![Screenshot 2021-09-18 at 09 06 12](https://user-images.githubusercontent.com/86503646/133864943-dfbe9215-3ad1-475f-af9b-740e20f36138.png)


### JS Functions
- https://www.w3schools.com/js/js_functions.asp

### CSS Margins
- https://www.w3schools.com/css/css_margin.asp
- https://www.w3schools.com/css/exercise.asp?filename=exercise_margin1

### CSS Padding
- https://www.w3schools.com/css/css_padding.asp
- https://www.w3schools.com/css/exercise.asp?filename=exercise_padding1

### Project (Naver login page)

### Homework 1
1) 아래 조건을 만족하는 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week7-1 이라는 폴더를 만들고 코드 올리세요.
2) HTML의 body는 다음과 같습니다
```html
<!-- index.html -->
    <body>
        <h1>구구단 프로그램</h1>
        <p id="number1"></p>
        <p id="number2"></p>
        <p id="number3"></p>
        <p id="number4"></p>
        <p id="number5"></p>
        <p id="number6"></p>
        <p id="number7"></p>
        <p id="number8"></p>
        <p id="number9"></p>
    </body>
```

```js
// main.js
window.onload = function () {
    let result = prompt('구구단 몇 단이 궁금하십니까?', '');
    showGugudan(result);
};

function showGugudan(number) {
    // 여기에서 p tag에 결과를 보여주도록 합시다.
}
```
3) window.onload 시점에 `prompt` 함수를 사용하여 `구구단 몇 단이 궁금하십니까?` 라는 질문을 하고 그 답에 대한 결과를 `p` tag에 나타내주세요.
- ![Sep-18-2021 09-53-31](https://user-images.githubusercontent.com/86503646/133866692-a71ec556-b09d-4167-8e88-645519a52c81.gif)

