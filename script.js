// Logic to find maximum number
// var numbers = [61, 23, 15, 10, 50, 78, 99]
// var maxNum = numbers[0]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > maxNum) {
//         maxNum = numbers[i]
//     }
// }
// console.log("Maximum number is:", maxNum)


// Logic to find minimum number
// var numbers = [61, 23, 15, 10, 50, 78, 99]
// var minNum = numbers[0]

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minNum) {
//         minNum = numbers[i]
//     }
// }
// console.log("Minimum number is:", minNum)

// Logic to generate random password
// var randomPassword = "1234567890qwertyuioplkjhgfazxvbnmQWERTYUIOPFGHJKLZXCVBNM!@#$%&"
// var password = ""
// for (let i = 0; i < 8; i++) {
//     var passwordInex = Math.ceil(Math.random() * randomPassword.length) - 1
//     password = password + randomPassword[passwordInex]
// }
// console.log(password)

// Logic to find remaining days in next Ramadan
var nextRamadan = new Date("7 Feb 2027")
var nextRamadanMilisec = nextRamadan.getTime()
var currentTimeMillisec = new Date().getTime()
var remainingDays = Math.ceil((nextRamadanMilisec - currentTimeMillisec) / 1000 / 60 / 60 / 24)
console.log(remainingDays)