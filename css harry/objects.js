console.log("This is tut 27");

let car = {
    name: "maruti_800",
    topspeed: 89,
    run: function () {
        console.log("car is running");
    }
};

// car.run()

function s1(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} Is Running`);
    };
    this.analyze = function () {
        console.log(
            `This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`
        );
    };
}

car1 = new s1("Hundai", 120)
car2 = new s1("Honda", 150)
car3 = new s1("Mercedes", 200)
car4 = new s1("Nissan", 190)
console.log(car1, car2, car3);


console.log("this is ES6 javascript");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return `I am ${this.name} and this company is the best`;

    }
    joiningYear() {
        return 2020 - this.experience;
    }
    static add(a, b) {
        return a + b;
    }
}
harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if (this.language == 'python') {
            return 'Python';
        }
        else {
            return 'JavaScript';
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}

rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
