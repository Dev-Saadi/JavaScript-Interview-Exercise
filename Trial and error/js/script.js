// const arr = [2, 3, 4, 5, 6];

// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// arr.forEach((item) => {
//   sum += item;
// });
// console.log(sum);

// Print number from 1 to 5 using a loop
// sum = 5;

// for (i = 5; i <= sum; i++) {
//   console.log(i);
// }

// do {
//   console.log(sum);

//   sum++;
// } while (sum <= 10);

// function addPlus(a, b) {
//   console.log(a + b);
// }

// addPlus(10, 1);

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// // Factorial calculation using a for loop
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;                        // Multiply result by each number from 1 to n
//   }
//   return result;
// }

// // Example usage
// let n = 7;
// console.log(factorial(n));

// function rectangleArea(w, h) {
//   return w * h;
// }

// let value = rectangleArea(5, 6);
// console.log(value);

let cities = ["Dhaka", "Ankara", "NewYork", "Tehran", "Canberra"];

// console.log(cities[1]);

// cities.push("Islamabad");
// cities.shift();
// cities.unshift("Berlin");
// cities.splice(2, 0, "Paris");
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
