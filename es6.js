// /37-2 Template String, Arrow Function, Spread Operator

// Template String
const numbers = [10, 40, 382, 4849];

const object = {
    name :'prosenjith',
    id: '212-15-14749',
    Study: 'CSE Department',
    nestedObject: {
        CityName: 'Sreemangal',
        Distic: 'Moulvibazar',
        Division: 'Sylhet'
    }
}

const templateString = `My name is ${object.name} . Department is ${object.Study} and index is ${numbers[3]}`
console.log(templateString)




// Array function
//1. way no 1
const arrayFuntion = (x) => {
    let re = x * 5;
    return re;
}

const x = 8;
console.log(arrayFuntion(x))

//2. way no 2

const name = () => {
    console.log('pappu')
}

//2. way no 3

const mulP = (i=10,o) => {
    console.log(i,o)
}
mulP(0, 90)

//  Spread Operator

const arrayCopy = [...numbers];

arrayCopy.push(100)
console.log(arrayCopy)

console.log(numbers)

const arrayCopy2 = [...numbers, 33];
console.log(arrayCopy2)



