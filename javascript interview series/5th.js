// duplicate count
let months = ['jan', 'feb', 'mar', 'april', 'may', 'may', 'june', 'july', 'july']

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


console.log(data)