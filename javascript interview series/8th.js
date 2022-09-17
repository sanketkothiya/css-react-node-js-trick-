//unique value

arr = [8, 8, 1, 2, 3, 4, 4, 5, 5]

const unique = arr.filter((ele, index, arr) => {
    // console.log('im', index);
    // console.log('inexof', arr.indexOf(ele))

    return arr.indexOf(ele) == index

})

sortvalue = unique.sort((a, b) => {
    return a - b
})

console.log(sortvalue);