x = [65, 32, 3, 71, 46, 15, 78, 43, 21]
let months = ['jan', 'feb', 'mar', 'april', 'may', 'may', 'june', 'july', 'july']
// string sort using sort method
const y = x.sort((a, b) => {
    return a - b
})

console.log(y)