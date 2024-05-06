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




// Interview problmes cybercart   add the values in array



// const num = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < num.length; i++) {
//     sum += num[i];
// }

// or do this

// num.forEach(num => {
//     sum += num
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



let apiURL = "https://dummyjson.com/products"

let apiData = fetch(apiURL)

apiData.then(res => res.json())
    .then(data => {
        data.products.forEach(item => {
            console.log(item.id);
        });
    })



// let apiURL = "https://jsonplaceholder.typicode.com/users"

// let apiData = fetch(apiURL)

// apiData.then(res => res.json())
//     .then(data => {
//         data.forEach(item => {
//             console.log(item);
//         });
//     })








