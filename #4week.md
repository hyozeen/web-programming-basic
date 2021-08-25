# web-programming-basic

## 4 Week

### HTML Layout 설계
- Semantic (현대식)

![semantic](https://user-images.githubusercontent.com/86503646/130285278-ce916346-d280-4fc1-83d3-6dd32429e289.png)
<img width="674" alt="Screenshot 2021-08-21 at 04 40 29" src="https://user-images.githubusercontent.com/86503646/130285514-5e04f4d8-4b75-4f8c-a580-f37244902163.png">
![Screenshot 2021-08-21 at 10 04 18](https://user-images.githubusercontent.com/86503646/130305703-bd724bd5-4859-4536-bc18-7eb1d1c10140.png)
![Screenshot 2021-08-21 at 10 02 27](https://user-images.githubusercontent.com/86503646/130305656-d1e64a41-8c26-4d9d-a672-522e1cef0cf2.png)


- Div (쉽고, 자유도 높음, division의 약자, 레이아웃을 나누는데 쓰임)

![Screenshot 2021-08-21 at 09 02 42](https://user-images.githubusercontent.com/86503646/130303836-82a99b77-5a97-4462-b6aa-e2d3243260c6.png)

<img width="710" alt="Screenshot 2021-08-21 at 04 39 46" src="https://user-images.githubusercontent.com/86503646/130285426-95c3d20b-c6bf-401b-84fe-c696657b1735.png">

<img width="395" alt="Screenshot 2021-08-21 at 04 44 52" src="https://user-images.githubusercontent.com/86503646/130285951-1ccd4a9e-d092-4203-941f-ddd7791831b1.png">

<img width="714" alt="Screenshot 2021-08-21 at 04 44 09" src="https://user-images.githubusercontent.com/86503646/130285888-cae2f3b7-5193-4909-8f7e-39c0964d88e1.png">


- Table (예전 방식, 비추)

```xml
<td colspan="합칠 셀의 개수">내용</td>
<td rowspan="합칠 셀의 개수">내용</td>
```

<img width="704" alt="Screenshot 2021-08-21 at 04 41 06" src="https://user-images.githubusercontent.com/86503646/130285565-c7e5188b-9e12-4a8d-88b2-37341a1b0b1b.png">

<img width="701" alt="Screenshot 2021-08-21 at 04 45 33" src="https://user-images.githubusercontent.com/86503646/130286006-e052c3e1-0086-47b8-872f-7c411208b6dd.png">

- https://blog.naver.com/dsz08082/221903006189
- https://2018-start.tistory.com/21

### HTML Styles
- https://www.w3schools.com/html/html_styles.asp

### CSS Backgrounds (image, repeat)
- https://www.w3schools.com/css/css_background_image.asp
- https://www.w3schools.com/css/css_background_repeat.asp

### JS Data Types
- https://www.w3schools.com/js/js_datatypes.asp


### Project (Naver login page)

### Homework 1
1) 아래 모양과 동일한 코드를 작성해서 github에 올리세요. 단, web-programming-basic/week4-1 이라는 폴더를 만들고 코드 올리세요.
![Screenshot 2021-08-21 at 09 53 08](https://user-images.githubusercontent.com/86503646/130305452-02064e4c-dd52-46d2-bc63-8fd401ab7f85.png)

2) image는 여기에서 다운로드
[images.zip](https://github.com/hyozeen/web-programming-basic/files/7024605/images.zip)

3) index.html의 body tag는 아래 내용 복사해서 사용
```html
<body>
    <h1>Background Homework</h1>
    <main></main>
</body>
```

4) 반드시 포함해야 할 내용
- background pattern은 body tag 에 적용
- 루피는 main tag 에 적용하고 가운데에 맞춘다
- main tag의 width, height는 100%, 500px로 한다

### Homework 2
1) 아래 모양과 비슷한 모양으로 만들어서 github에 올리세요. 단, web-programming-basic/week4-2 이라는 폴더를 만들고 코드 올리세요
예시 1.
![Screenshot 2021-08-25 at 18 37 51](https://user-images.githubusercontent.com/86503646/130769005-70571a9b-6f04-476c-9b60-e79e0317bf36.png)

예시 2.
![Screenshot 2021-08-25 at 18 39 03](https://user-images.githubusercontent.com/86503646/130769018-83c33358-877c-4f5f-b5b8-a7e1a0166077.png)


2) 하스스톤 투명 logo는 여기에서 다운로드 하세요.
[logo.png.zip](https://github.com/hyozeen/web-programming-basic/files/7045899/logo.png.zip)

3) logo의 배경 이미지는 google에서 찾아서 적용하세요 (제시된 예시와 다른 이미지여야 합니다)
4) index.html의 body tag는 아래 내용 복사해서 사용
```html
    <body>
        <header>
            <div class="logo"></div>
        </header>
        <main></main>
        <footer>
            <span>Copyright © 2021 Hyozeen. All Rights Reserved.</span>
        </footer>
    </body>
```
5) 반드시 포함해야 할 내용
- header tag와 logo class은 width: 100%, height: 500px를 적용합니다.
