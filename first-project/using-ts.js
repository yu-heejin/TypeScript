var tsbutton = document.querySelector("button");
var tsinput1 = document.getElementById("num1"); //! 추가 -> 요소를 얻을 것임을 타입스크립트에게 알림
var tsinput2 = document.getElementById("num2"); //기본적으로 타입스크립트에게 null을 야기하지 않을 것임을 알려줌  -> 항상 요소를 찾을 수 있음

function tsadd(num1, num2) {
    return num1 + num2;
}
tsbutton.addEventListener("click", function () {
    console.log(tsadd(+tsinput1.value, +tsinput2.value)); //문자열 타입으로 인식 -> +를 붙여서 숫자로 변환
});

//컴파일 후 생성된 자바스크립트 파일을 열어보면 타입들이 사라진 것을 확인할 수 있음
//바닐라js만 남음을 확인할 수 있다.
