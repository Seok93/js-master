// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 매개변수에 기본값을 설정할 수 있다.
function add(a = 1, b = 1, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [ 3, 4, 5, 6, 7, 8 ]
  console.log(arguments); //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6, '6': 7, '7': 8 }

  return a + b;
}
add(1, 2, 3, 4, 5, 6, 7, 8);

// Rest 매개변수 (Rest Parameters)
function sum(...numbers) {}
