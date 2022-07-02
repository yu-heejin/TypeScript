console.log('Your code goes here...');

//코드에서 무언가를 변경할 때마다 수동으로 다시 컴파일해야하는 불편함이 있다
//npm 기술을 사용하면 자동으로 처리해줌(npm init)

//npm init
//package.json 파일이 생성되면 npm install --save-dev lite-server
//설치가 완료되면 package.json으로 가서 "start": "lite-server" 추가
//npm start해서 해당 스크립트 실행 가능

//lite-server: package.json에 index.html 파일을 제공하는 제공하는 간단한 개발 서버
//다른 파일이 변경될 때마다 페이지를 자동으로 갱신