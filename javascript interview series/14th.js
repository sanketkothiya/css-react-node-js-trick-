// duplicate
a = [1, 2, 4, 5, 5]
const a = new Set(a)
console.log(a);

// 

const b = a.filter((item, pos) => {
    return a.indexof(item) == pos;
})

// fibonaci series
// 0 1 1 2 3 5
let n1 = 0, n2 = 1, next;
let printfibo = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(n1)
        next = n1 + n2
        n1 = n2
        n2 = next


    }
}

// reverser

var name = 'sanket'
let splitstr = name.split("")
let reverse = splitstr.reverse();
let reverStr = reverse.join('');

function getRev(str) {
    let rever = '';
    for (let i = str.length - 1; i >= 0, i--) {
        rever += str[i]

    }
    return rever;
}
console.log(getRev('Demo'))

// swap

let a = prompt("Enter the first variable:")
let b = prompt("enter the second variable")
let temp;
temp = a
a = b;
b = temp;


// reduce
const numbers = [1, 1, 1, 1];
const sum = numbers.reduce((acuumulator, currentval) => {

    return acuumulator + currentval
}, 0)

console.log(Math.round(sum));

// map
// iterate the function
// All JavaScript objects inherit properties and methods from a prototype.

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";
console.log(myFather.nationality)

// 
function add(n1, n2) {
    return n1 + n2
}

function add(n1, n2, n3) {
    return n1 + n2 + n3
}

console.log(add(2, 3, 4));

// isNAN check the type of number
Math.max()

// palindrop
let name1 = 'sanket'
let name2 = name1.toLowerCase()
let splitstr1 = name.split("")
let reverse1 = splitstr.reverse();
let reverStr1 = reverse.join('');


// double function
function outer(o) {
    return function inner(i) {
        console.log(o * i)

    }

}
outer(2)(3)

// let months = ['jan', 'feb', 'mar', 'april', 'may', 'may', 'june', 'july', 'july']

const data = months.reduce((obj, months) => {
    if (obj[months] == undefined) {
        obj[months] = 1
        return obj
    }
    else {
        obj[months]++
        return obj;

    }

}, {})