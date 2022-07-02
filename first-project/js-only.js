const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {   //해당 타입이 number인지 확인
    return num1 + num2;
  } else {
    return +num1 + +num2   //number타입이 아니면 각 매개변수 앞에 더하기 기호를 붙여서 둘 다 숫자로 변환시킴
  }


  //return num1 + num2;    //따라서 해당 함수에 두개의 문자열을 전달함
}
//이러한 방법은 타입스크립트는 아니고 바닐라js 해결방식임
//하지만 문자열을 전달할 수 없도록 만들고싶음, 숫자만 받고 싶을 때가 있음
//함수를 예전 상태로 유지하면서 문제를 해결하고 싶다면 타입스크립트가 도움이 됨

button.addEventListener("click", function() {   //이벤트 리스너
  console.log(add(input1.value, input2.value));
});


//해당 프로그램을 실행하고(index.html), 1, 2를 각각 입력한 후 확인 버튼을 누르면
//이벤트 리스너에 의해 더해지긴 하지만 단순히 문자열로 더해져
//3이 아니라 12라는 값이 나오게 됨
//자바스크립트의 약점, 애플리케이션의 논리적 에러임
//자바스크립트에서 input의 값에 엑세스할 때 알아야 할 중요한 사항이 있는데,
//항상 문자열로 접근한다는 것이다.
//index.html을 살펴보면 input의 타입은 number지만 이와 상관없이 자바스크립트는
//항상 문자열로 접근한다.
//이러한 문제를 타입스크립트로 해결할 수 있다