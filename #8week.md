# web-programming-basic

## 8 Week

### 개발자도구 
![Screenshot 2021-09-25 at 09 32 21](https://user-images.githubusercontent.com/86503646/134751785-2ebe69c1-3bd0-455f-a355-a383347ab856.png)

### HTML
#### Lists
- https://www.w3schools.com/html/html_lists.asp
- https://www.w3schools.com/html/exercise.asp?filename=exercise_html_lists1

### CSS
#### Margins
- https://www.w3schools.com/css/css_margin.asp
- https://www.w3schools.com/css/exercise.asp?filename=exercise_margin1

#### Padding
- https://www.w3schools.com/css/css_padding.asp
- https://www.w3schools.com/css/exercise.asp?filename=exercise_padding1

### JS
#### Functions
- https://www.w3schools.com/js/js_functions.asp

#### For loops
- https://www.w3schools.com/js/js_loop_for.asp
- https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops1

### Project

#### Homework 1
1) 아래 조건을 만족하는 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week8-1 이라는 폴더를 만들고 코드 올리세요.
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
    // 단, for 구문을 사용하도록 합니다.
}
```
3) window.onload 시점에 `prompt` 함수를 사용하여 `구구단 몇 단이 궁금하십니까?` 라는 질문을 하고 그 답에 대한 결과를 `p` tag에 나타내주세요.
- ![Sep-25-2021 08-22-27](https://user-images.githubusercontent.com/86503646/134748898-67bf68de-5999-4763-9107-fa95bc4d42d9.gif)

4) 단, week7-1 과는 다르게 반복되는 부분에 대해서 for 구문을 사용하도록 합니다.

#### Homework 2
1) 아래 모양과 동일한 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week8-2 이라는 폴더를 만들고 코드 올리세요.
- ![Screenshot 2021-09-25 at 09 16 14](https://user-images.githubusercontent.com/86503646/134751284-1fc6cb19-4cec-4e81-baa0-c2d0260f78ef.png)

- 브라우저 창 너비를 최소로 했을 때
- ![Screenshot 2021-09-25 at 09 16 22](https://user-images.githubusercontent.com/86503646/134751292-eb94032c-1c97-447f-ac96-1d4590a72fbe.png)

2) 아래의 html을 복사해서 만듭니다.
```html
<body>
    <h1>To-Do List</h1>
    <div class="container">
        <!-- 여기에는 List -->
    </div>
</body>
```
3) list item style는 네모 모양으로 합니다.
4) ordered list의 item은 오전은 `i`부터 시작, 오후는 `a`부터 시작하도록 합니다.
5) 단, 개발자 도구에서 container class를 가진 div element가 다음과 같은 margin/padding 모양이 나올 수 있도록 만들어야 합니다.
- ![Screenshot 2021-09-25 at 08 54 27](https://user-images.githubusercontent.com/86503646/134750387-70c9b576-e28f-467d-a80e-8ce37069b091.png)
