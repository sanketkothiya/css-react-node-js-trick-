class data {

    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getFullName() {
        console.log('my name is ' + this.name + ' \n and age is ' + this.age);

    }
}

var s1 = new data('sanket', 23)
s1.getFullName()