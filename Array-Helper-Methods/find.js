let users = [
  {name: 'rolly' },
  {name: 'ferny' },
  {name: 'cassy' }
];

let user;

for (let i = 0; i < users.length; i++){
  if(users[i].name === 'ferny'){
    user = users[i];
    break;
  }
}

console.log(user);

// ---- ARRAY HELPER DESCRIPTION ----
// Calling the array helper method '.find' will take items in an array
// and pass them to an iterator function until it evaluates to true.
// As soon it evaluates to true, it will exit the iteration.
// Without a return statement, it will result in UNDEFINED

users.find(function(user){
  return user.name === 'ferny'
});

console.log(user)