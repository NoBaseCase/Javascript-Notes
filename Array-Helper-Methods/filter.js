let products = [
  { name: 'cucumber', type: 'vegetable', quantity: 32, price: 12},
  { name: 'lettuce', type: 'vegetable', quantity: 26, price: 8},
  { name: 'broccoli', type: 'vegetable', quantity: 56, price: 16},
  { name: 'banana', type: 'fruit'},
  { name: 'apple', type: 'fruit'}
];

let filteredProducts = [];

for( let i = 0; i < products.length; i++){
  if (products[i].type === 'vegetable'){
    filteredProducts.push(products[i]);
  }
}

filteredProducts.forEach((product)=>{
  console.log(product.name);
});
console.log('---') 

// ---- ARRAY HELPER DESCRIPTION ----
// Calling the array helper method '.filter' will take items in an array
// and pass each one through an iterator function.
// It will then return an array that contains the results of each 
// iteration that evaluated to 'true'.
// If you do not include a return statement, the helper method will return undefined.
// The iterator function the anonymous function within the helper method.


// Example - Helper function returns an array of vegetables that evaluate to 'true'
let veggies = products.filter(function(product){
  return product.type === 'vegetable'
    && product.quantity < 40 
    && product.price > 5
});

veggies.forEach((veggie)=>{
  console.log(veggie.name);
});

// More Examples - filter out comments related to a specific post
let post = { id: 4, title: 'New Post'};
let comments = [
  {postID: 1, content: 'awesome post'},
  {postID: 4, content: 'bad post'},
  {postID: 3, content: 'cool post'},
  {postID: 4, content: 'meh post'}
];

function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postID === post.id
  });
}

console.log(commentsForPost(post, comments));