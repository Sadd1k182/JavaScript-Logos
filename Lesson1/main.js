// 'some text', "some text", `some text` - strings
// 11, 3.34141. -12 - numbers
// true false -  booleans
// undefined 
// null 
// symbol
//  object

//  Спеціальні значення 
// NaN - не число
// Infinity     1/0
// -Infinity    -1/0

// console.log("Hello World") - виведення в консоль

// var myFirstVariable;
// let mySecondVariable;       - variables that can be done in different ways
// const myThirdVariable;

// let str;
// str = 'Hello JavaScript'
// let num = 22;
// console.log(str)
// console.log(num)

// str1 = 'Java'
// console.log(str1)


// let a = 10;
// let b = 5;
// let suma = a + b;
// console.log(suma)

// let a = '10';
// let b = 5;
// let suma = a + b;
// console.log(suma)

// let a = +'10';
// let b = 5;
// let suma = a + b;
// console.log(suma)

// const first = 'Hello'
// first = 'Bye'

// alert('first')
// alert('hello how are you')

// confirm('ТИ хочеш зайти на цей сайт?')

// let ask = confirm('ТИ хочеш зайти на цей сайт?')
// console.log(ask)

// prompt('Write something here ...')

// let ask2 = +prompt('Write something here ...')
// console.log(ask2)

// let birthYear = +prompt('Write your brith year')
// let year = +prompt('Write actual year')
// let userOld = year - birthYear;
// let myColor = 'red'
//     // console.log(userOld)
//     // document.write('How old are you?' + userOld + ' some text')
//     // document.write(`How old are you my friend? ${userOld} some text`)   -   this came from ES6
// document.write(`<h2 style="color:${myColor}">How old are you my friend? ${userOld} some text</h2>`)

// Практична 1 Створити <div></div>

// 1ю Ширину 
// 2. Висота
// 3. Ширина бордера
// 4. Тип бордер
// 5. Колір бордера
// 6. Колір бекграунда

// let divHeight = +prompt('Write div height');
// console.log(divHeight)
// let divWdith = +prompt('Write div width');
// console.log(divWdith)
// let divBorderWidth = +prompt('Choose div border width');
// console.log(divBorderWidth)
// let divBorderTyle = prompt('Choose div border type');
// console.log(divBorderTyle)
// let divBorderColor = prompt('Choose border color')
// console.log(divBorderColor)
// let divBackgroundColor = prompt('Choose div color')
// console.log(divBackgroundColor)

// document.write(`<div style="height:${divHeight}px; width:${divWdith}px;border-width:${divBorderWidth}px;border-style:${divBorderTyle}; border-color:${divBorderColor}; background-color:${divBackgroundColor}"></div>`)

// JS Оператори

// +, -, / ,* , %

// =,!=, ==, ===, !==, !,

// <, >, >=, <=, &&, ||

// & && 
// | ||

// a++ ++a
// a-- --a

// let i = 1;
// let j = i++;
// console.log(i)
// console.log(j)

// let a = 1;
// let b = ++a;
// console.log(a)
// console.log(b)

// let n = 2;
// n *= 3;
// n /= 3;
// n += 3;
// n -= 3;

// console.log(n)

// if (){console.log('work')} else{console.log("doesn't work")}

// let age = +prompt("Write your age ");

// if (age >= 21) {
//     console.log('You may enter...')
// } else {
//     console.log('Go home')
// }

// let age = +prompt("Write your age ");

// if (age > 21 || age == 21) {
//     console.log('You may enter...')
// } else {
//     console.log('Go home')
// }

// if (age >= 21) {
//     console.log('You may get inside')
// } else if (age == 20) {
//     console.log('Just wait 1 more year buddy')
// } else {
//     console.log('Go home!')
// }

// let age = +prompt("Write your age ");
// if (age == 18) {
//     let check = confirm('The parents are okay?')
//     if (check == true) {
//         console.log('Welcome bro')
//     } else {
//         console.log('See you next time')
//     }
// } else if (age >= 19) {
//     console.log('Welcome bro')
// } else {
//     console.log('See you next time')
// }

// let login = 'Admin';
// let password = 1111;

// let signLogin = prompt('Write your login')
// let signPassword = prompt('Write your password')

// if (signLogin == login && signPassword == password) {
//     console.log(`Welcome ${login}`)
// } else {
//     console.log(`Password is incorrect`)
// }

// Практична
// В першому підїзді квартири з 1 по 20
// В другому з 21 по 48
// В третьому з 49 по 90

// Користувач вводить номер квартири, вивести в якому підїзді вона

let number = +prompt('Write your apartment number')

if (number >= 1 && number <= 20) {
    console.log("You are in building 1")
} else if (number >= 21 && number <= 48) {
    console.log("You are in building 2")
} else if (number >= 49 && number <= 90) {
    console.log('You are in building 3')
} else {
    console.log("You are outside")
}