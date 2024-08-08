// Create an empty array to store 3 favorite snacks.
let snacks = ["Chips","crips","water"]

// Console log the 2nd element of the array
console.log(snacks[1])

// Add a new snack to the end of the array.
  snacks.push("pizza");


// Console log the last element of the array using array.length to check
console.log(snacks[3])
snacks.length


// Add another snack to the start of the array.
  snacks.unshift("Lemon");


// Console log the length of the array (should be 5!)
console.log(snacks.length)


// Change the 3rd element to a different snack
  snacks.splice(3, "Lemon");

// Remove the first snack from the array
  snacks.shift();


// Remove the last snack from the array
  snacks.pop();

// Console log the whole array to check if your operations worked
console.log(snacks)

