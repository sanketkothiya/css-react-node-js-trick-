arr = [1, 2, 3, 4, 4, 5, 5]

const duplicate = arr.filter((ele, index, arr) => {

    return arr.indexOf(ele) != index

})

console.log(duplicate);