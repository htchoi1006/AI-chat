# AI-chat

## 시작 방법

- Git clone 후 터미널에 `yarn` 입력
- `npm run dev` 명령어 입력 후 시작


## 구현 내용

- Figma 파일로 전달받은 디자인 구현
- Axios를 사용한 API 호출 및 메시지 응답 구현 
- 추가적인 구현 내용
	- 대화내용 초기화 버튼에 마우스 커서가 hover 되면 더 눈에 잘띄도록 색상 변경 


## 화면 스크린샷

- 실행시 첫 화면
<img src = "https://user-images.githubusercontent.com/40112123/200205019-cfadbf67-f4bc-46a8-adbf-461bf196ae3a.png" width="600px" height=auto>

- `Clear Conversation` 버튼에 마우스 hover 시 색상 변경
<img src = "https://user-images.githubusercontent.com/40112123/200205110-ff1bc42a-bb7a-41b7-bc44-d1d8acf71551.png" width="600px" height=auto>

- API 호출과 응답
<img src = "https://user-images.githubusercontent.com/40112123/200205543-5c0ac2d0-21db-4b70-9da3-4f00da774af8.png" width="600px" height=auto>

- `Clear Conversation` 버튼 클릭시 Modal 창 표시 (Cancel 클릭시 Modal 창 닫힘)
<img src = "https://user-images.githubusercontent.com/40112123/200205672-c71d3a75-dd2c-41db-a7cd-38782e324bad.png" width="600px" height=auto>


## 아직 구현하지 못한 내용

- 메시지 주고 받을때마다 새로운 말풍선 띄우기
- Modal 창에서 Clear 버튼 클릭시 대화창 비우기
- 태블릿, 모바일 등 반응형 웹사이트 구현
