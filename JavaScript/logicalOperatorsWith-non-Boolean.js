//•	Logical Operators with non Booleans 
// False (false)
// Undefined 
// Null 
// 0 
// NAN

// Anything that is not false is truthy .

// let userColor = 'red';
let userColor = undefined;
let defaultColor = 'blue';
console.log (userColor || defaultColor);