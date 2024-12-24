
// versao meio paia
const sum = (num) => {
    const numbers = []
    for (let i = 0; i < Number(String(num).length); i++) {
        numbers.push(Number(String(num)[i]));
    }
    // console.log(arguments)
    return numbers.reduce((prev, curr) => {
        return prev + curr
    })
}


// sum(251)
console.log(sum(251));