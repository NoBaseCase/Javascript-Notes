
let numbers = [1,2,3,4,5,6];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// Why add numbers to new array? Why not just double original values?
// in large complex javascript you want to avoid mutating or changing data wherever possible.
// Data is usually also used in other areas of the application and editing values on the fly will 
// most likely break things elsewhere

// ---- ARRAY HELPER ----
let doubled = numbers.map(function(number){
  return number * 2;
});
console.log(doubled);

// ---- ARRAY HELPER DESCRIPTION ----
// Calling the array helper method '.map' will take items in an array
// and pass each one through an iterator function.
// It will then return an array that contains the results of each iteration.
// If you do not include a return statement, the helper method will return undefined.
// The iterator function the anonymous function within the helper method.
// The anonymous function can also be moved outside of the helper function.

// Examples 
let cars = [
  { model: 'buick', price: 'cheap'},
  { model: 'camaro', price: 'expensive'},
  { model: 'camary', price: 'affordable'}
];

let prices = cars.map(function(car){
  return car.price;
});

console.log(prices);

// Maps are good at 'plucking' properties from objects in an array