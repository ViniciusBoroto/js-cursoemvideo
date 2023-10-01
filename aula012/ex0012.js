let actualHour = new Date()
let hour = actualHour.getHours()
if (hour < 5.5) {
    console.log('Boa madrugada!')
} else if (hour < 12) {
    console.log('Bom dia!')
} else if (hour < 18) {
    console.log('Boa tarde!')
} else if (hour < 24) {
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}
console.log(`Agora são ${hour}`)

