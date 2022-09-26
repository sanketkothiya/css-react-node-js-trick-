// const callme = new Promise((resolve, reject) => {
//     if (true) {
//         setTimeout(() => {
//             console.log("my name is sanket");

//         }, 0)
//         resolve('true')
//     }
//     else {
//         reject()
//     }

// })

// callme.then((result) => {
//     console.log(result);
// })
//     .catch(err => {
//         console.log(err)
//     })


//  await

// const callME = async () => {
//     if (true) {
//         return 'hello sir'
//     }
// }

// const parent = async () => {

//     return await callME()

// }

// (
//     async () => {
//         console.log((await parent()))
//     }
// )();

// const jwt = require('jsonwebtoken');
// const encodeddata = jwt.sign({ name: "sankjet" }, process.env.SECRET)
// const decrepteddata = jwt.varify(encodeddata, process.env.SECRET)

const express = require('express')
const app = express()
app.use(express.json)

const x = (req, resp, next) => {
    if (!req.query.age) {

        resp.send("Please provide your age")
    }
    else if (req.query.age < 18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.post('', x, (req, res) => {
    res.json(req.body)

})

// call

// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

// apply take array

// bind return function

// Closures
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();

// spread

x = [1, 2, 3]
y = [...x]
console.log(y)