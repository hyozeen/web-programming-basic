# web-programming-basic

## 6 Week

### Javascript로 HTML DOM 조작하기
- https://www.w3schools.com/js/js_htmldom_html.asp
- document
  : 브라우저가 불러온 웹 페이지를 나타낸다
  - https://developer.mozilla.org/ko/docs/Web/API/Document
  ![Screenshot 2021-09-11 at 08 47 55](https://user-images.githubusercontent.com/86503646/132928382-fece322f-15c5-4f7c-9ddb-8327eaaaca1f.png)


#### javascript에서 element id로 html 조작하기 
- element 가져와서 test 라는 변수에 담기
  ```html
  <!-- index.html -->
  <h1 id="example">Hello</h1>
  ```
  
  ```js
  // main.js
  let test = document.getElementById("example");
  ```
  - https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById
  
- element를 숨기기
  ```html
  <!-- index.html -->
  <h1 id="example">Hello</h1>
  ```
  
  ```js
  // main.js
  let test = document.getElementById("example");
  test.hidden = true;
  ```
  
- element를 나타나게 하기

  ```html
  <!-- index.html -->
  <h1 id="example">Hello</h1>
  ```
  
  ```js
  // main.js
  let test = document.getElementById("example");
  test.hidden = false;
  ```
  
- element의 글자의 내용 바꾸기

  ```html
  <!-- index.html -->
  <h1 id="example">Hello</h1>
  ```
  
  ```js
  // main.js
  let test = document.getElementById("example");
  test.innerText = "Bye";
  ```
  
- image element의 그림 바꾸기

  ```html
  <!-- index.html -->
  <img id="example" src="https://hyozeen.github.io/web-programming-basic/week4-2/images/cardpack.png">
  ```
  
  ```js
  // main.js
  let test = document.getElementById("example");
  test.src = "https://hyozeen.github.io/web-programming-basic/week4-2/images/card/card0.png";
  ```

- alert 함수
알림창 팝업을 띄워주는 함수

```js
// main.js

window.onload = function() {
    alert("Start!!!!!");
}
```

![Screenshot 2021-08-28 at 18 16 53](https://user-images.githubusercontent.com/86503646/131212999-23127bbb-1b81-4443-8228-25d3c1f4346d.png)

### Comments (HTML, CSS, JS)
#### HTML Comments
- https://www.w3schools.com/html/html_comments.asp
#### CSS Comments
- https://www.w3schools.com/css/css_comments.asp
#### JS Comments
- https://www.w3schools.com/js/js_comments.asp

### HTML Links
- https://www.w3schools.com/html/html_links.asp

### HTML Images
- https://www.w3schools.com/html/html_images.asp

### CSS Borders
- https://www.w3schools.com/css/css_border.asp


### Project (Naver login page)

### Homework 1
1) 아래 모양과 동일한 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week6-1 이라는 폴더를 만들고 코드 올리세요. (이전에 했던 프로젝트에다 해도 됩니다)

