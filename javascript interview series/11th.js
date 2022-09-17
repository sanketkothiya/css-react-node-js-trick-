x = [1, 2, 4, 5]
y = [2]

const z = x.some((ele) => {
    return y.includes(ele)
})

console.log(z);