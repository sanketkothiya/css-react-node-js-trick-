console.log('This is tutorial 25')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// create element
let divElem = document.createElement('div');

let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode("this is my element,click to edit me");
}
else {
    text = document.createTextNode(val);

}
divElem.appendChild(text);

// Give element divElem,style and class
divElem.setAttribute('id', 'elem')
divElem.setAttribute('class', 'elem')
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// grab the main container
let container = document.querySelector('.container');
let first = document.getElementById("myfirst");

// insert the element before the first id element
container.insertBefore(divElem, first) /
    console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;


    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
})