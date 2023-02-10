// Data
const firstDogs = [3, 5, 12, 7, 9]
const secondDogs = [4, 1, 15, 8, 3]

// 1. create a shallow copy without the first and the last ele. of firstDogs
// console.log(firstDogs)
const newFirstDogs = firstDogs.slice(1, -1)
// console.log('new arr: ', newFirstDogs)
// 2.
const allDogs = [...newFirstDogs, ...secondDogs]
console.log(allDogs)
// 3.
allDogs.forEach((yrs, id) => {
    const age = (yrs > 8) ? 'an adult' : 'a puppy'
    console.log(`Dog no. ${id + 1} is ${age}, which is ${yrs} yrs. old`)
})
