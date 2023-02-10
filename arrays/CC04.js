const dogs = [
    { weight: 22, curFood: 250, owners: ["Dat", "Tam"] },
    { weight: 25, curFood: 280, owners: ["Duc", "Anonymous"] },
    { weight: 28, curFood: 220, owners: ["Quang", "Thien"] },
    { weight: 22, curFood: 250, owners: ["Hiep", "Quynh"] }
]
// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight == 0.75 * 28)))
// 2.
const dogQuang = dogs.find(dog => dog.owners.includes('Quang'))
console.log(`Quang's dog is eating ${dogQuang.curFood > dog.recFood}`)
// 3.
const ownersEatMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
// 4.
const ownersEatLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood))
// 6. 
const checkOk = dog => {
    dog.curFood > dog.recFood * 0.9 &&
        dog.curFood < dog.recFood * 1.1
}
// 7.
console.log(dogs.some(checkOk))