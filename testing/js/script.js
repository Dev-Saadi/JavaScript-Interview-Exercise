// function first() {
//     return "first function"
// }
// function second() {
//     return "second function"
// }
// function third() {
//     return "third function"
// }

// const message = first() && second() && third()

// console.log(message);




// Interview problmes cybercart add the values in array



// const num = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// or do this

// num.forEach(item => {
//     sum += item
// });

// console.log("The sum is:", sum);





// const users = [
//     { name: "kelvin", age: 25 },
//     { name: "John", age: 34 },
//     { name: "Bob", age: 56 }
// ]

// for (let i = 0; i < users.length; i++) {
//     console.log(`${users[i].name} is ${users[i].age} years old`);

//     // let people = users[i].name
//     // let number = users[i].age

//     // console.log(people, number);
// }

// users.forEach(users => {
//     console.log(`${users.name} is ${users.age} years old`)
// });


// var test = () => {
//     console.log("hello");
// }

// test()



// let apiURL = "https://dummyjson.com/products"

// let apiData = fetch(apiURL)

// apiData.then(res => res.json())
//     .then(data => {
//         data.products.forEach(item => {
//             console.log(item.id);
//         });
//     })



// let apiURL = "https://jsonplaceholder.typicode.com/users"

// let apiData = fetch(apiURL)

// apiData.then(res => res.json())
//     .then(data => {
//         data.forEach(item => {
//             console.log(item);
//         });
//     })



// async function apiCall() {

//     let url = "https://dummyjson.com/products"
//     let res = await fetch(url)
//     let data = await res.json()
//     data.products.forEach(item => {
//         console.log(item);
//     });
// }

// apiCall()



// const apiCall = async () => {
//     let url = "https://dummyjson.com/products"
//     let res = await fetch(url)
//     let data = await res.json()
//     data.products.forEach(element => {

//         console.log(element);
//     });

// }

// apiCall()


// const apiCall = async () => {
//     let url = "https://dummyjson.com/products";
//     let res = await fetch(url);
//     let data = await res.json();
//     const firstProduct = data.products[0];
//     for (let key in firstProduct) {
//         console.log(`${key}: ${firstProduct[key]}`);
//     }
// };

// apiCall();


// finding Duplicates
// const arr = [1, 3, 4, 5, 7, 8, 2, 3, 1]

// const duplicate = arr.filter((item, element) => arr.indexOf(item) !== element)
// console.log(duplicate);


//Finding Min Max value

// const arr = [23, 45, 67, 89, 21, 87];
// const max = Math.max(...arr);
// console.log(max);

// or

// const arr = [23, 45, 67, 89, 21, 87];
// const max = arr.reduce((prev, curr) =>
//     (prev > curr ? prev : curr));
// console.log(max);




// How To find second Largest value in array

// const arr = [24, 56, 43, 67];

// // Find the largest value
// const largest = Math.max(...arr);

// // Remove the largest value from the array
// const arrWithoutLargest = arr.filter(num => num !== largest);

// // Find the second largest value in the modified array
// const secondLargest = Math.max(...arrWithoutLargest);

// console.log(secondLargest); // Output: 56












