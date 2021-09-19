# web-programming-basic

## 8 Week

### 개발자도구 

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

