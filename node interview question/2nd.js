// Array of numbers where the maximum
// and minimum are to be found
const array = [-1, 2, -5, 8, 16];

// Setting a number of the given array as
// value of max and min we choose 0th index
// element as atleast one element should be
// present in the given array

let max = 0, min = 100;
for (let i = 0; i < array.length; i++) {

    // If we get any element in array greater
    // than max, max takes value of that
    // larger number
    if (array[i] > max) { max = array[i]; }

    // If we get any element in array smaller
    // than min, min takes value of that
    // smaller number
    if (array[i] < min) { min = array[i]; }
}
console.log("max = " + max);
console.log("min = " + min);