//Exercise 1:
const myObject = {name:'John', age:30, city:'New York'}
const myArray = [10,20,30,40]
function destructureExample(obj,arr){
    const {name,age} = obj
    const [zero,,two] = arr
    console.log('Object destructured result:')
    console.log({name,age})
    console.log('Array destructured result:(This part is optional!!)')
    console.log({zero,two})
}
console.log('Exercise 1:')
destructureExample(myObject,myArray)

//Exercise 2:
function sumNumbers(...numbers){
    let result = 0;
    for (let n of numbers){
        result += n
    }
    console.log(`Sum = ${result}`)
}
console.log('\nExercise 2:')
sumNumbers(1,2,3,4,5)

//Exercise 3:
function createGreeting(name){
    let message = `Hello, ${name}! Welcome to our website`
    console.log(message)
}
console.log('\nExercise 3:')
createGreeting('Idris Ahmad')

//Exercise 4:
function isEven(num){
    let decision = num%2==1? 'Odd':'Even'
    console.log(decision)
}

console.log('\nExercise 4:')
isEven(7)

//Exercise 5:
const multiply = (a,b)=>{return  `${a} * ${b} = ${a*b}`}
console.log('\nExercise 5:')
console.log(multiply(2,5))

//Exercise 6:
function getLargestNumber(num1,num2){
    if (!isNaN(num1) && !isNaN(num2)){
        if (num1>num2){
            return `${num1} is the largest among ${num1} and ${num2}`
        }else if (num1==num2){
            return `${num2} is the largest among ${num1} and ${num2}`
        }else {
            return `${num1} and ${num2} are equal`
        }
    }else{
        return 'Please enter two valid numbers !!!'
    }
}
console.log('\nExercise 6:')
console.log(getLargestNumber(10,5))

//Exercise 7:
function getAddressCity(obj){
    let city = obj.hasOwnProperty('city')? obj.city : 'Unknown'
    return city
}
const address = {street:'123 Main street',country:'USA'}
console.log('\nExercise 7:')
console.log(getAddressCity(address))

//Exercise 8:
function doubleNumbers(numsArray){
    let doubleNumbers = numsArray.map(function (number){
        return number*2
    })
    return doubleNumbers;
}
console.log('\nExercise 8:')
console.log(doubleNumbers([1,2,3,4,5]))

//Exercise 9:
function filterEvenNumbers(numsArray){
    let evenNumberArray = numsArray.filter((number)=>{
        return number%2===0
    })

    return evenNumberArray
}
console.log('\nExercise 9:')
console.log(filterEvenNumbers([1,2,3,4,5]))

//Exercise 10:
function sumArray(numsArray){
    let initialSum = 0
    let result = numsArray.reduce((sum,number)=>{
        return sum+number
    },initialSum)

    return result
}
console.log('\nExercise 10:')
console.log(sumArray([1,2,3,4,5]))

//Exercise 11:
function sortNumber(numsArray){
    return numsArray.sort((a,b)=>{return a-b})
}
console.log('\nExercise 11:')
console.log(sortNumber([5,2,8,1,4]))
