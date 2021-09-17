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

#### console.log (개발자도구에 메세지를 보여주는 함수)

```js
  // main.js
  window.onload = function() {
      console.log("여기는 시작점입니다.");
  }
```

#### confirm (확인창 띄워주는 함수)
사용자가 확인 또는 취소를 누를때까지 팝업창이 띄워져있습니다.
사용자가 `확인` 버튼을 누르면 true, `취소` 버튼이나 <kbd>Esc</kbd> 를 누르면 false를 return 합니다.

```js
  // main.js
  window.onload = function() {
      let result = confirm("홈페이지에 접속하시겠습니까?")
      console.log(result);
  }
```

#### prompt (질문창 띄워주는 함수)
사용자에게 텍스트를 입력하라는 메세지를 띄워줌과 동시에, input 창을 띄워줍니다.
`확인` 버튼을 누르면 사용자가 입력한 값을 return 하고, `취소` 버튼이나 <kbd>Esc</kbd> 를 누르면 null을 반환합니다.

```js
  // main.js
  window.onload = function() {
      let result = prompt("당신의 이름은 무엇인가요?", "");
      console.log(result);
  }
```

### JS Functions
- https://www.w3schools.com/js/js_functions.asp

### HTML Images (picture)
- https://www.w3schools.com/html/html_images_picture.asp

### CSS Margins
- https://www.w3schools.com/css/css_margin.asp

### CSS Padding
- https://www.w3schools.com/css/css_padding.asp

### Project (Naver login page)

### Homework 1
1) 아래 모양과 동일한 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week6-1 이라는 폴더를 만들고 코드 올리세요. (이전에 했던 프로젝트에다 해도 됩니다)
- ![Sep-11-2021 09-33-39](https://user-images.githubusercontent.com/86503646/132930253-81d5e37c-c13b-4aa1-a33b-7b3a47c469bd.gif)
- cardpack을 누르면 "카드팩이 열렸습니다!" 메세지와 함께 카드 3장을 나타나게 하세요.
- card image는 아래에서 다운로드 받으세요
- [cards.zip](https://github.com/hyozeen/web-programming-basic/files/7146942/cards.zip)

### Homework 2
1) 아래 모양과 동일한 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week6-2 이라는 폴더를 만들고 코드 올리세요. (이전에 했던 프로젝트에다 해도 됩니다)
- ![Sep-15-2021 17-57-11](https://user-images.githubusercontent.com/86503646/133403841-ade9fdd4-fcad-47f0-899c-3d97b501cfad.gif)
- card 뒷면 이미지는 아래에서 다운로드 받으세요
- [cardback.zip](https://github.com/hyozeen/web-programming-basic/files/7168553/cardback.zip)
