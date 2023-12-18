// Задание 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// const result = (number) => {
//     return console.log(Math.pow(number, 3));
// };
// result(5);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что 
// значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в 
// консоль текст "Размер заработной платы за вычетом налогов равен значение"

// const salary = (number) => {
//     if(isNaN(number)){
//         return alert(`значение задано неверно`);
//     } 
//     return alert(`Размер заработной платы за вычетом налогов равен ${number * 0.87}`);
   
// };
// salary(Number(prompt(`Введите чило`)));

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет 
// максимальное значение среди этих чисел

// const minMax = (num1, num2, num3) => {
//     let min;
//     let max;
//     if(num1 < num2 && num1 < num3){

//         min = num1;
//         if(num2 > num3){
//             max = num2;
//         }else {
//             max = num3;
//         }
//     } else if (num2 < num1 && num2 < num3) {
//         min = num2;
//         if(num1 > num3){
//             max = num1;
//         }else {
//             max = num3;image.png
//         }
//     }else {
//         min = num3;
//         if(num1 > num2){
//             max = num1;
//         }else {
//             max = num2;
//         }
//     }
//     alert(`Min = ${min}, Max = ${max}`)
// }

// minMax(Number(prompt("Введите первое число")), Number(prompt("Введите второе число")), Number(prompt("Введите третье число")));

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (number1, number2) => {
    return number1 + number2;
}
const subtraction = (number1, number2) => {
    if(number1 >= number2){
        return number2 - number1;
    }else return number2 - number1; 
}
const multiplication = (number1, number2) => {
    return number1 * number2;
}
const division = (number1, number2) => {
    if(number1 === 0 || number2 ===0){
        return "На ноль не делим";
    } else if(number1 >= number2){
        return number1 / number2;
    }else return number2 / number1; 
}

console.log(sum(2, 6));
console.log(subtraction(2, 6));
console.log(multiplication(2, 6));
console.log(division(2, 6));
