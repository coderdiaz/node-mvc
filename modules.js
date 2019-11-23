const PI = 3.1416;

const sum = (x, y) => x + y;
const substraction = (x) => (y) => x - y;

// function substraction(x) {
//   return function(y) {
//     return x - y;
//   }
// }

const data = { PI, sum , substraction };

module.exports = data;