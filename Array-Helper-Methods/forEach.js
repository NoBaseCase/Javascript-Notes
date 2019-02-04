
// Take a list of items
let colors = ['red', 'blue', 'green'];

// standard method iterating through a loop
// prone to typos 
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);  
}

// ---- ARRAY HELPER ----
colors.forEach(function(color){
  console.log(color);
});

// ---- ARRAY HELPER DESCRIPTION ---
// calling the array helper method 'forEach' will take the items in an array
// and pass each one through an iterator function.
// The iterator function the anonymous function within the helper method.
// The anonymous function can also be moved outside of the helper function



// Moving the anonymous function outside
let numbers = [1,2,3,4,5,6,7];
var sum = 0;
function adder(number){
  sum += number;
}
numbers.forEach(adder);
console.log(sum);

// Take note that when moving out the anonymous function, 
// it must be passed by REFERENCE(see above)!
// Doing so otherwise will just call the function for every item in the array, i.e do nothing.

// More Examples
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  // instead of iterating through the array of objects, use 'forEach'
  posts.forEach(function(post){
    savePost(post);
  });
}

// Even More Examples!
let images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
let areas = [];
images.forEach(function(image){
  areas.push(image.height * image.width);
});

// Why should I use this? Significanly less code.

