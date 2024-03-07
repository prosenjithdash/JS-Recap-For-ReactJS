// 37-1 Six JavaScript Fundamentals That You Need To Know


// 1. How to declare a variable using let and const


// const
const myName = 'Prosenjith Dash Pappu'; // No change variable name.
console.log(myName);


// let
let session = 'Winter'
session = 'Summer'
console.log(session);




// 2. Condition

// 6 type of basic condition: === , >=, <=, !==. >, <
// Multiple Condition: && , ||
const a = 44; b = 90;
if( a === b){
    console.log(a, 'Equal', b);
}
else {
    console.log(a, 'Not Equal', b);
}



// 3. Array

const numbers = [10, 40, 382, 4849];
console.log(numbers)

// array length
console.log(numbers.length)

// show single element from array with for
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}


// show single element from array with for of it is use just array and string
for(let n of numbers){
    console.log(n)
}

// console 2 index value
console.log(numbers[2])

// push array
numbers.push(67);
console.log(numbers)


// pop array
numbers.pop();
console.log(numbers)


// array slice
let slice = numbers.slice(1, 3)
console.log(slice)


// 5. Normal Function 

function mul(n, m) {
    let r = n * m;
    return r;
}
let n = 10;
let m = 5;

console.log(mul(n, m));

// Array function

const arrayFuntion = (x) => {
    let re = x * 5;
    return re;
}

const x = 8;
console.log(arrayFuntion(x))



// 6. Object

const object = {
    name :'prosenjith',
    id: '212-15-14749',
    Stydy: 'CSE Department',
    nestedObject: {
        CityName: 'Sreemangal',
        Distic: 'Moulvibazar',
        Division: 'Sylhet'
    }
}

console.log(object)

console.log(object.name)

console.log(object.nestedObject.Distic)