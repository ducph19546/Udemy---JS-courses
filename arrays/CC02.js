const firstDogs = [3, 5, 12, 7, 9]
const secondDogs = [4, 1, 15, 8, 3]

const allDogs = [...firstDogs, ...secondDogs]

// 1. calculate dogAge into humanAge
const humanAge = allDogs.map((dogAge) => {
    if (dogAge < 2) return dogAge * 2
    return dogAge * 4 + 16
})
console.log(humanAge)
// 2. Include humanAge >= 18
const adults = humanAge.filter((age) => age >= 18)
console.log(adults)
// 3. Calc average age humanAge >= 18
const averageAge = adults.reduce((acc, age) => acc + age, 0) / adults.length
console.log(averageAge)