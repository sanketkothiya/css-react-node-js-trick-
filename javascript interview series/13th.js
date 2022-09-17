const input = {
    student: [
        {
            name: 'sanket',
            surname: 'kothiya'
        },
        {
            name: 'rajesh',
            surname: "amabaliya"
        }
    ]
}

const data = input.student.map((item) => {
    return item.name
})

console.log(data);