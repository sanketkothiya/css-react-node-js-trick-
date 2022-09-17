const string = 'mary'
const string2 = 'army'

function anagram(string, string2) {
    var a = string.toLowerCase();
    var b = string2.toLowerCase();

    a = a.split('').sort().join('')
    b = b.split('').sort().join('')

    return a == b

}
console.log(anagram(string, string2))