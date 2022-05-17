// const apple = {
//   name: 'apple',
//   display: function () {
//     console.log(`${this.name}: 🍎`);
//   },
// };

// const orange = {
//   name: 'orange',
//   display: function () {
//     console.log(`${this.name}: 🍊`);
//   },
// };

// console.log(apple);
// console.log(orange);

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.print = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
Fruit.prototype.display = function () {
  console.log(`${this.name}: 🍎`);
};

const apple = new Fruit('apple', '🍎');

console.log(apple);
