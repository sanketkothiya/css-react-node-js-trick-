console.log("this is ajax tutorial");

let fetchBtn = document.getElementById("fetchBtn")
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("you click the button click");

    const xhr = new XMLHttpRequest();

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.getResponseHeader('Content-type', 'application/json');;

    xhr.onprogress = function () {
        console.log("on progress");

    }


    xhr.onreadystatechange = function () {
        console.log('ready state is ', xhr.readyState);

    }

    xhr.onload = function () {

        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.log("some error occured!!")
        }


    }

    params = `{
        "userId": 783,
        "id": 45,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }`;
    xhr.send(params);

    console.log("we are done!");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);



    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = '';
            for (key in obj) {
                str += `<li>${obj[key].employee_name} </li>`;

            }
            list.innerHTML = str;
        }
        else {
            console.log("some error occured!!")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");

}