console.log("welcome")
let a = document.getElementById("myfirst");
// let b = document.querySelector("#myfirst");
// let c = document.getElementsByClassName("container");
// Array.from(c).forEach(element => {
//     console.log(element);
//     element.style.color = "red";


// });

// a = a.childNodes;
// a = a.parentNode;
// // a.style.color = "red";


// console.log(a);


// let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// let nodeName = cont.childNodes[1].nodeName;
// let nodeName = cont.childNodes;
// let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeName)
// console.log(nodeType)
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0]);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

// console.log(container.firstElementChild);
// console.log(container.firstElementChild.parentNode);
// console.log(container.firstElementChild.nextSibling);
// console.log(container.firstElementChild.nextElementSibling);
// console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

///part2

// console.log('this is tut 16');
// let element = document.createElement('li');
// let text = document.createTextNode('I am a text node');
// element.appendChild(text)

// // Add a class name to the li element
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'mytitle');
// element.innerText = '<b>Hello this is created by harry</b>';
// element.innerHTML = '<b>Hello this is created by harry</b>';

// let ul = document.querySelector('ul.this');
// ul.appendChild(element);
// console.log(ul)
// console.log(element)

// let elem2 = document.createElement('h3') ;
// elem2.id = 'elem2';
// elem2.className = 'elem2';
// let tnode = document.createTextNode('This is a created node for elem2');
// elem2.appendChild(tnode);

// element.replaceWith(elem2);
let myul = document.getElementById('mul');
console.log(myul)
myul.replaceChild(element, document.getElementById('fui'));
// mul.removeChild(document.getElementById('lui'));
// let pr = elem2.hasAttribute('class');
// let pr = elem2.getAttribute('li');
// elem2.removeAttribute('id');
// elem2.setAttribute('title', 'myelem2title');
// console.log(elem2, pr);

// quick quiz
// create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "https://www.codewithharry.com"


// /////part_3
// console.log("This is tutorial 17 on events");

// document.getElementById("heading").addEventListener("click", function (e) {
// let variable;
// console.log("You have clicked the heading");
// variable = e.target;
// variable = e.target.className;
// variable = Array.from(e.target.classList);

// variable = e.target.id;
// variable = e.offsetX;
// variable = e.offsetY;
// variable = e.clientX;
//   variable = e.clientY;
// console.log(variable);
// location.href = '//codewithharry.com'
// });


// events javascript

// console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('mousedown', func3);
// btn.addEventListener('dblclick', func2);

// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks its a double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks its a mouse down ", e);
//     e.preventDefault();
// }
// document.querySelector('.no').addEventListener('mouseenter', function(){


//     console.log('You entered no')
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no')
// })

// document.querySelector('.container').addEventListener('mousemove', function (e) {
//     console.log(e.offsetX, e.offsetY);
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},${e.offsetX})`;
//     console.log('You triggered mouse move event')
// })


//  practice

// let str = "python";
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function (element) {
//     href = element.href;
//     if (href.includes(str)) {
//         console.log(href);
//     }
// });

// sanker.claaslist.add
// sanker.claaslist.remove