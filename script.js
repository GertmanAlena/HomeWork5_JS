// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if(i === 0){
        console.log(`${i} это ноль`);
    }else if(i % 2 === 0){
        console.log(`${i} это чётное число`);
    } else console.log(`${i} это нечетное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 4 && arr[i] !== 5){
        arr2.push(arr[i]);
    }    
}
console.log(arr2);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arrayNumbers = [];

forArray();
minNumber(arrayNumbers);

console.log(arrayNumbers);

function forArray() {
    let count = 0;
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        arrayNumbers[i] = getRandomInt(10);
        sum = sum + arrayNumbers[i];
        if(arrayNumbers[i] === 3){
            count++;
        } 
    }
    if(count > 0){
        console.log(`В массиве есть ${count} цифр 3`);
    }else console.log(`В массиве НЕТ цифры 3`);

    console.log(`сумма = ${sum}`);
    return arrayNumbers;
}

function minNumber(arrayNumbers) {
    let min = arrayNumbers[0];
    for (let i = 1; i < arrayNumbers.length; i++) {
        if(arrayNumbers[i] < min){
            min = arrayNumbers[i];
        }
    }
    console.log(`минимальное число в массиве => ${min}`);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// *************** Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

var star = '*';
for (let i = 1; i < 20; i++) {
    
    // console.log('*'.repeat(i));

    var str = '';
    for (var j = 0; j < i; ++j) {
        str += star;
      }    
      console.log(str);
}