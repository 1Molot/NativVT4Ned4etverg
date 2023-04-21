// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {

    // console.log(nums)
    //...здесь пишем код.

    // В return стоит "заглушка", чтоб typescript не ругался
    // return 123
    return nums.reduce((a, b) => a + b )
}
// console.log(sum(3, 5, 7, 6, 4, 9))
// console.log('Maksim')

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if(a + b < c || b + c < a || a + c < b){                  //существует ли треугольник
        return "00"
    }if(a === b && a === c && b === c){                        // равносторонний или нет
        return "10"
    }if(b === c || a === c || a === b){                        // равнобедренный ли
        return "01"
    }
    return "11"                                                        // обычный

}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    const get = String(number)  // '1357'
    const arr = get.split('') //['1','3','5','7']

    return arr.reduce((a, b) => +a + +b,0 )
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

// export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
export const isEvenIndexSumGreater = (arr: number[]): boolean => arr.reduce((acc,el,i) => i % 2 ? acc + el : acc - el ) <= 0;
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    // return true


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
let newArr = []
    for(let i = 0; i < array.length;i++) {
        if(array[i] > 0 && array[i] % 2 == 0){
            newArr.push(array[i] **2)
        }
    }
    return newArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return (N * (N+1)) /2
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
 const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let arr = []
    for (let i = 0; i < banknotes.length;i++){
        while (amountOfMoney >= banknotes[i]){
            amountOfMoney = amountOfMoney-banknotes[i]
            arr.push(banknotes[i])
        }
    }
    return arr
}