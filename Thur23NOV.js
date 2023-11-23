function counter(n) {
  return function () {
    let current_value = n;
    n++;
    return current_value;
  };
}

let initial_value = 25;
let myCounter = counter(initial_value);

// Call the counter function multiple times
console.log(myCounter()); // Output: 25
console.log(myCounter()); // Output: 26
console.log(myCounter()); // Output: 27
