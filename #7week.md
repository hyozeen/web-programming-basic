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
