// A with .find
const superheroes = [
{name: "Batman", alter_ego: "Bruce Wayne"},
{name: "Superman", alter_ego: "Clark Kent"},
{name: "Spiderman", alter_ego: "Peter Parker"}
];
const findSpiderman = function(superheroes) {
    return superheroes.find(function(superheroe) {
        return superheroe.name === "Spiderman";
    })
}
console.log(findSpiderman(superheroes));

// B 
const doubleArrayValues = function(array) {
    newArray = [];
    array.forEach(numbers => {
        newArray.push(numbers * 2);
    })
    return newArray;
}
console.log(doubleArrayValues([1, 2, 3]));

// C with .some
const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
        return number > 10;
    })
}
console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); // true
console.log(containsNumberBiggerThan10([1,2,1,2,1,2])); // false

// D with .includes
const isItalyInTheGreat7 = function(array) {
    return array.includes("Italy");
}
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])); // true

// E
const tenfold = function(array) {
    newArray = [];
    array.forEach(numbers => {
        newArray.push(numbers * 10);
    })
    return newArray;
}
console.log("tenfold", tenfold([1, 4, 3, 6, 9, 7, 11])); // [10, 40, 30, 60, 90, 70, 110]
// with .map
const tenfoldMap = function(array) {
    return array.map(numbers => {
        return numbers * 10;
    })
}
console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11])); // [10, 40, 30, 60, 90, 70, 110]

// F with .every
const isBelow100 = function(array) {
    return array.every(number => {
        return number < 100;
    })
} 
console.log("Less than 100: ", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])); // Less than 100:  false

// G with .reduce
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const bigSum = function(array) {
    return array.reduce((numb, total) => {
        return numb + total;
    })
}
console.log(bigSum(numbers)); // 1118