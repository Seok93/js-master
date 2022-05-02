// 단항연산자 Unary Operators
// + (양)
// - (움)
// ! (부정)

let a = 5;
console.log(a);

a = -a; // -1 * 5;
console.log(a);

a = -a; // -1 * -5;
console.log(a);

a = +a; // -1 * 5;
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean); // 논리부정(!)으로 true ➔ false, false ➔ true
console.log(!!boolean);

// +연산다: 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// boolean 값으로 변환
// 이중부정으로 원래 값의 논리값을 확인할 때 사용, !!값은 boolean 타입으로 변환함
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
