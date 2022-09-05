
// website flaviocopes.com

// console.log("hello");
let l = [1, 2, 3, 4, 5];
// l.forEach(e => { console.log(e) });

// const fineitem = l.find((e) => {
//     return e < 3;
// });

// const filterdata = l.filter((elem, index) => {
//     return elem < 3;
// });


let newarr = l.map((curelem, index, arr) => {
    return curelem * 2
}).filter((e) => {
    return e > 2
})
console.log(newarr);
console.log(l.sort());


// return `index no=${index} and the calue is ${curelem} belong to ${arr}`


// reduce

// some/product/division
// 3d and 4d array to 1 dimention array
let arr = [34, 56, 32, 65, 76];
let sum = arr.reduce((accumulator, curelem, index, arr) => {
    debugger;
    return accumulator += curelem;
})

console.log(sum);


// string methods
// length,indexof,splice
// \"sanket\"


const sk = "my name is sankwt"
console.log(sk.indexOf("my", 6));
console.log(sk.search("my"));
console.log(sk.slice(1, 4));
console.log(sk.toLowerCase());
console.log(sk.charAt(1));
console.log(sk.substring(1, 4));
console.log(sk.concat(l));
console.log(sk.replace("my", "your"));
// trim
const txt = "a,b,c,d";
console.log(txt.split(","));


let currdate = new Date();
console.log(currdate.toString());
console.log(currdate.toLocaleString());
console.log(currdate.getFullYear());
console.log(currdate.getHours());
console.log(currdate.getDay());
console.log(currdate.setDate(56));

// (function () {
//     setInterval(() => {
//         var d = new Date().toLocaleTimeString();
//         document.getElementById("demo").innerHTML = d;
//     })
// })();

console.log(Math.sqrt(16));
// ceil / round / floor/max/round/min
console.log(Math.floor(Math.random() * 10));

// window.location.href
// window.location

// window-- -> document
//     |
// | --> bom=navigation / screen / location / frames / history / xml httprequest
// document.head
// document.body
// document.body.childNodes
// document.body.children.length
// document.body.hasChildNodes
// document.body.firstChild
// document.body.firstElementChild
// style.color = red
// document.querySelector('.child')
// document.body.parentNode
// document.body.nextSibling
// document.body.previousSibling
// document.head.previousSibling
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName
// document.querySelector("#")
// document.querySelector("ul li .class")


// alert / prompt / confirm
// onclick
// onmousedown
// onmouseout
// onkeydown
// onkeypress
// sk.addeventlistener('click', () => {

// })

// console.log(event);
// console.log(event.target);
// console.log(event.type);
// console.log(event.key);
// console.log(event.code);

// setInterval
// setTimeout
// clearInterval = refrence 10: 46: 18
// clearTimeout


// oop in javascript

let biodata = {
    myname: "sanket",
    myage: 26,
    getdata: function () {
        console.log(`my name is ${biodata.myname}`);
    }
}

console.log(this);
console.log(this.alert('hellol'));

let school = {
    class1: {
        maths: "jay sir",
        science: "shilpa madam"
    },
    getdata: () => {
        console.log(`the maths taken by mr ${this.class1.maths}`);
    }
}

school.getdata();

// array destructing
// const mybiodata = ['vinod', 'jay', 'raja']
// let [s1, s2, s3] = mybiodata;


// let name = "sanket kothiya";
// let myage = 26;

// const mybio = { name, myage }
// console.log(mybio);

// spread operator
const colors = ["red", "green", "blue", "white"];

const myfav = [...colors, "yello", "cream"];

console.log(myfavcolor);

// padstart and padend

let age = "26".padend(10)

// obeject value

const person1 = { name: "fred", age: 89 };

console.log(object.values(person1));
console.log(object.entries(person1));

// es2018

const person = { name: 'sanket', age: 22 }
const sperson = { ...person };
console.log(sperson);

// how to fattern an array

const arr1 = [
    ['zone1', 'zone2'],
    ['zone1', 'zone2'],
    ['zone1', 'zone2'],
    ['zone1', 'zone2']
];


console.log(arr1.flat(Infinity));


const skd = { name3: "sanket", age: 22 }
let jk = object.entries(skd)
console.log(object.fromEntries(jk));

// es2020
// 1.BIGINT

let oldNum = Number.MAX_SAFE_INTEGER;
const newnum = 55743543754785437n + 12n;


// null check

// false ?? 'some truthy value '

// // event bubbling and event capturing 12:14
// 1.what is  event propagation
//     => determine order  of events
// 1. capture phase; --> upper to toLowerCase
// 2. bubble phase: ---> lower to upper

// 1111
// const add = (a, b) => {
//     return a + b;

// }

// const sub = (a, b) => {
//     return Math.abs(a - b);
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2)
// }

// console.log(calculator(2, 3, add));


// 2222222

// const outerfun = () => {
//     let b = 10;
//     const innerfunction = () => {
//         let sum = a + b;
//         console.log(`the sum is ${sum}`);
//     }

//     return innerfunction;
// }

// let newdata = outerfun(56);
// newdata();


// execution stack 13:14
// function curring 13:22
function sum(num1) {
    return function (num2) {
        return function (num3) {
            console.log(num1 + num2 + num3);
        }
    }
}

const sum = (num1) => (num2) => (num3) => console.log();

sum(5)(3)(8)

// typeof ()


// promises

// 2condition--> success==> fail
// api   https://icanhazdadjoke.com/api
// fetch('')
// fetch() fullfiled or reject


promise


// const generatejokes = () => {

//     const setHeader = {
//         header: {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com", setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//             jokes.innerHtml = data.jokes;

//         }).catch((error) => {
//             console.log(error);
//         })
// }

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


// function postdata(){
//     url="http://dummy.restapiexample.com/api/v1/create";
//     data='{"name":"fdrfgglry347485674945","salary":"123","age":"23"}'
//     params={
//         method:'post',
//         headers:{
//             'content-Type':'application/json'
//         },
//         body:data
//     }
//     fetch(url,params).then(response=>response.json())
//     .then(data=>console.log(dara))

// fetch(url,params).then((response)=>{
//     return response.json();
// }).then(data)=>{
//     console.log(data);
// })
// }


// async await

// const generatejokes = async () => {


//     try {
//         const setHeader = {
//             header: {
//                 Accept: "application/json"
//             }
//         }


//         const res = await fetch("https://icanhazdadjoke.com", setHeader);
//         const data = await res.json();
//         jokes.innerHtml = data.joke;
//     }
//     catch (err) {
//         console.log(`the error is ${err}`);
//     }


// when use onsubmit so auto submit prevent by add return false or e.prevent=default

// data-target getAttribute('data-target)

// const a=+str number ma convert kare
// Math.round()

// insertAdjacentHTML afterbegin beforbegin
//appendchild
// toggle
//classlist
//change event
// event.target.value


// localStorage.setItem('notes', JSON.stringify('NOTES'))
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach((note) => {
        addNewNote()
    })

}

