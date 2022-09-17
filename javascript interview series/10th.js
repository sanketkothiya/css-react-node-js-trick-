let month = ['jan', 'feb', 'mar', 'apr']

x = []
for (let i of month) {
    i = i.charAt(0).toUpperCase() + i.substring(1)
    x.push(i)
}

console.log(x)