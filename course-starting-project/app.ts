//console.log('Time to get started...');

function add(n1: number, n2: number) {    //타입배정 사용
    return n1 + n2;
    //타입 배정 후 두 매개변수 모두 다른 타입의 값을 전달하는 타입이
    //허용되지 않도록 입력해야함
}

//단순히 문자열과 숫자를 같이 입력하면, 문자열일 뿐이므로 자바스크립트에서는
//문자열이 있으니 문자열에 무언가를 더해야겠다고 판단하게 됨
//첫번째 값이 문자열이기 때문에 문자열이 반환되는 것
//자바스크립트를 이용하면 이러한 일이 발생할 수 있음
//타입스크립트에서는 타입배정을 이용해 이러한 실수를 막을 수 있음

const number1 = 5;
//const number1 = '5';    //해당 값을 문자열로 바꾼다면 결과물은 52.8 출력(문자열 연결)
const number2 = 2.8;

const result = add(number1, number2);   //타입 배정 후 발생하는 에러
//무시하고 컴파일한다고 하더라도 에러때문에 불가능
console.log(result);

//That means. TypeScript's type system only helps you during development
//(i.e. before the code gets compiled.)
//브라우저에는 내장 타입스크립트 지원이 없기 때문에 런타임에서 자바스크립트가
//다른 식으로 작동하도록 변경하지 않음
//타입스크립트 코드를 자바스크립트로 컴파일하기 전까지 개발 도중에만 유용하지만
//온전성 검사를 수행하기 때문에 매우 유용하다
//에러를 통해 우리는 값을 미리 수정할 수 있음

//타입스크립트는 런타임 코드를 바꾸지 않음
//기본 설정을 사용하더라도 컴파일 도중에 에러를 감지하여 잘못된 결과의 원인이 되는
//파일을 생성했음에도 불구하고 타입스크립트는 에러를 코드에 표기함
//기본적으로 타입스크립트는 컴파일을 차단하지 않고 실수에 대해 지적함

//js파일과 ts파일이 같이 열려있으면 중복 함수와 관련된 에러가 발생할 수 있기에
//둘 중 하나만 열어주는 것이 좋다.