const firstDogs = [3, 5, 12, 7, 9]
const secondDogs = [4, 1, 15, 8, 3]

const allDogs = [...firstDogs, ...secondDogs]

const calcAverageAge = ages =>
    ages
        .map(age => age <= 2 ? age * 2 : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, id, arr) => (acc + age) / arr.length, 0);
console.log(calcAverageAge(firstDogs))
