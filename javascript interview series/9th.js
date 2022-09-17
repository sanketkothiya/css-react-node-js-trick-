let a = [4, 6, 8, 2, 77, 43, 88]

const max = () => {
    return a.reduce((acumu, current) => {
        return acumu > current ? acumu : current
    })
}

console.log(max(a));
