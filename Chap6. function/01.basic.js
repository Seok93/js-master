function add(num1, num2) {
  return num1 + num2;
}

const result = sum(1, 2);
console.log(result);

//사용 예제2
function fullName(firstName, lastName) {
  return `${lastName} ${firstName}`;
}
let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName, lastName));
