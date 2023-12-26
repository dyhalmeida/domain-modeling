export const sum = (...values: number[]) => {
    return values.reduce((acc, value) => {
        return acc + value
    }, 0)
}

console.log(sum(4,4,4,4))