function add(a, b) {
  return a + b;
}

const sum = add;

console.log(add(1, 2));
console.log(sum(1, 2));
console.log(add === sum);
