const tsbutton = document.querySelector("button");
const tsinput1 = document.getElementById("num1")! as HTMLInputElement;   //! 추가 -> 요소를 얻을 것임을 타입스크립트에게 알림
const tsinput2 = document.getElementById("num2")! as HTMLInputElement;   //기본적으로 타입스크립트에게 null을 야기하지 않을 것임을 알려줌  -> 항상 요소를 찾을 수 있음
//여기서는 ID를 통해 값을 받아내고 있지만, 타입스크립트에서
//해당 코드가 정말 작동하는 지는 알 수 없음
//예를 들어 id값에 오타가 발생할 경우, 요소를 선택할 수 없음
//타입스크립트는 html 코드가 작동하는지 확인하기 위해 분석하는 것이 아님
//따라서 이 코드는 실패할 수도 있음
//성공하여 요소를 선택할 수 있다고 하더라도 이것이 input 요소가 될 필요는 없음
//다른 요소가 얼마든지 들어올 수 있기 때문임

function tsadd(num1: number, num2: number) {   //숫자 타입 명시적 선언
    return num1 + num2;

    //현재 상태에서 num1의 타입을 확인하면 any로 나옴
    //이것은 어떤 타입이든 올 수 있다는 의미임
    //타입스크립트는 더 명확한 타입을 추가할 수 있음
}

tsbutton.addEventListener("click", function() {
    console.log(tsadd(+tsinput1.value, +tsinput2.value));   //문자열 타입으로 인식 -> +를 붙여서 숫자로 변환
    //value 속성이 실제로 있는지 확실하지 않다는 에러를 반환
    //자바스크립트에서 고려하지 못했던 오류를 잡아줌
    //대부분의 html 요소들은 value 속성을 갖고있지 않음
    //다른 요소가 들어올 가능성이 있기 때문에 value 관련 에러 발생
});


//자바스크립트에 있는 코드를 그대로 복사하면 에러가 보임
//자바스크립트 파일을 삭제하면 오류가 일부 사라지긴하지만, 이름을 바꿔도 괜찮다
//오류가 여전히 발생하기도 함

//타입스크립트는 우리가 더 명확히 코드를 다시 확인하도록 요구함

//타입스크립트는 여전히 자바스크립트로 컴파일 하기 때문에 자바스크립트 파일을 가져옴
//현재 컴파일 과정에서 에러가 발생함
//Argument of type 'string' is not assignable to parameter of type 'number'
//문자열 인수를 숫자 타입의 매개변수에 할당할 수 없음을 의미함
//이는 타입스크립트가 input 요소의 value 속성에서 얻는 것이 문자열이 됨을 이해한다는 것임