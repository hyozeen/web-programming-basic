# web-programming-basic

## 1 Week

### task 관리 기법 (kanban board)
https://pleasuredev.tistory.com/6
- Kanban board
  * 작업의 진행 상황을 한눈에 알아보기 쉽게 팀원과 공유 가능

**기본개념**

<img width="696" alt="Screenshot 2021-07-31 at 20 05 43" src="https://user-images.githubusercontent.com/86503646/127737929-0cb08a68-a0a3-4951-8f8c-9b09484b1993.png">

**예시**

<img width="684" alt="Screenshot 2021-07-31 at 20 10 55" src="https://user-images.githubusercontent.com/86503646/127738051-4927260d-9662-4335-a74c-0188c054cc8f.png">

###  HTML Attributes
https://www.w3schools.com/html/html_attributes.asp

### CSS Selectors
https://www.w3schools.com/css/css_selectors.asp

### JS Variables
https://www.w3schools.com/js/js_variables.asp

### Project (Naver login page)

**1) github에 로그인 후, web-programming-basic 이라는 repository 만들기**
1. https://github.com/
2. 로그인
3. Repository 만들기
<img width="1059" alt="Screenshot 2021-07-31 at 20 21 48" src="https://user-images.githubusercontent.com/86503646/127738317-d303f34d-9c54-40f1-952e-45bb61ec0038.png">
4. Repository name 빈칸에 web-programming-basic 적고 `Create repository` 버튼 클릭
<img width="762" alt="Screenshot 2021-07-31 at 20 22 43" src="https://user-images.githubusercontent.com/86503646/127738352-8357d6a5-7db6-4990-b9c5-7ff76cb6125a.png">

**2) github page 만들기**
1. web-programming-basic repository 선택하기
<img width="1352" alt="Screenshot 2021-07-31 at 20 24 58" src="https://user-images.githubusercontent.com/86503646/127738390-0bc55bfc-cee4-447d-991c-d189a3981b85.png">
2. Settings > Pages
Branch: main > root > save 클릭
<img width="770" alt="Screenshot 2021-07-31 at 20 27 45" src="https://user-images.githubusercontent.com/86503646/127738462-f6f795e5-05ad-45ab-aab6-aaf8f3b425a9.png">
3. 생성된 page 주소 확인
<img width="760" alt="Screenshot 2021-07-31 at 20 28 53" src="https://user-images.githubusercontent.com/86503646/127738484-4bcf03a9-c8d5-427b-8ced-fda7cff309bb.png">
4. 브라우저 주소창에서 확인
<img width="869" alt="Screenshot 2021-07-31 at 20 29 40" src="https://user-images.githubusercontent.com/86503646/127738512-07437069-257d-47c7-a4c8-f94500ae7dad.png">

**3) web-programming-basic repository git clone 받기**
1. web-programming-basic repository 선택하기
2. Codes 선택
3. 주소 복사
<img width="428" alt="Screenshot 2021-07-31 at 20 33 48" src="https://user-images.githubusercontent.com/86503646/127738611-4a98c480-24ac-453f-9ddd-9a4c6d9c5ffb.png">
4. Finder 실행하기
5. Documents > programming 폴더 만들기
6. vscode 실행하기
7. New Window 열기
<img width="263" alt="Screenshot 2021-07-31 at 20 36 58" src="https://user-images.githubusercontent.com/86503646/127738682-d37a6c2d-47bf-4f38-a4df-ae9961f371ca.png">
8. Open Folder 클릭 > programming 폴더 열기
<img width="176" alt="Screenshot 2021-07-31 at 20 38 38" src="https://user-images.githubusercontent.com/86503646/127738730-3717bba6-c35f-4985-af6a-3b9b3803185c.png">
9. <kbd> control + ` </kbd> 단축키로 터미널 열기
10. git clone 하기
<img width="1076" alt="Screenshot 2021-07-31 at 20 42 06" src="https://user-images.githubusercontent.com/86503646/127738800-f6f282a2-ad58-49e9-ad53-47455b859509.png">
11. 왼쪽 Explorer 창에 web-programming-basic 폴더가 만들어졌으면 성공
<img width="267" alt="Screenshot 2021-07-31 at 20 42 44" src="https://user-images.githubusercontent.com/86503646/127738818-9f7d5222-70f4-42ba-9f22-54dfa3e16449.png">

**4) naver라는 폴더 만들고, index.html, main.js, style.css 파일 만들어서 github에 push 하기**
1. Explorer 의 web-programming-basic 폴더 위에서 우클릭 > New Folder 클릭 > naver 폴더 만들기
<img width="361" alt="Screenshot 2021-07-31 at 20 44 36" src="https://user-images.githubusercontent.com/86503646/127738875-658fa7f2-9fe9-4c24-b509-20f5b7975459.png">
<img width="273" alt="Screenshot 2021-07-31 at 20 45 53" src="https://user-images.githubusercontent.com/86503646/127738896-f2f21186-e509-4012-8194-abba9e8c7e02.png">
2. Explorer 의 web-programming-basic 폴더 안에 있는 naver 폴더에서 우클릭 > New File 클릭 > index.html, main.js, style.css 파일 만들기
<img width="270" alt="Screenshot 2021-07-31 at 20 47 34" src="https://user-images.githubusercontent.com/86503646/127738939-c2133d6e-77bd-4277-ab3b-e9838ed9384c.png">
<img width="255" alt="Screenshot 2021-07-31 at 20 48 37" src="https://user-images.githubusercontent.com/86503646/127738951-7d8f9390-da16-4676-b1e9-c908faee2c3b.png">
3. index.html 파일 열어서 아래 코드 복사해 넣기

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Naver</title>
    </head>
    <body>
        <h1>Naver</h1>
    </body>
</html>
```

4. index.html 파일 저장
5. Explorer의 web-programming-basic 폴더 위에서 우클릭 > Open in Terminal 선택
6. 아래 터미널에서 다음 명령어 실행

```sh
git status
git add naver/*
git status
git commit -m 'Init naver code'
git push origin main
```

7. github 들어가서 코드가 잘 업로드 되었는지 확인
<img width="1002" alt="Screenshot 2021-07-31 at 21 08 05" src="https://user-images.githubusercontent.com/86503646/127739407-673e2027-7e17-4c85-9ca6-801c6c4fad7c.png">

8. github page 들어가서 코드가 잘 올라갔는지 확인
https://hyozeen.github.io/web-programming-basic/naver/index.html

<img width="380" alt="Screenshot 2021-07-31 at 21 09 56" src="https://user-images.githubusercontent.com/86503646/127739434-9041a80b-c2f4-49f0-9476-7bbe1f2f30c5.png">
