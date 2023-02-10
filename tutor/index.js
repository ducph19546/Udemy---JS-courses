let teams = ['T1', 'C9', 'SE', 'DRX', 'Hanwhalife']
console.log(teams)

const id = teams.indexOf('T1')
// teams.splice(id, 1)
// console.log(teams)

// const newTeams = teams.map(function (team) {
//     if (team == 'T1') return 'SKT T1'
//     return team
// })
// console.log(newTeams)

let input = prompt("Enter 3 first words")

teams.forEach(function (team) {
    let bool = team.toLowerCase().includes(input.toLowerCase())
    if (bool === true) {
        console.log(team)
    }
})