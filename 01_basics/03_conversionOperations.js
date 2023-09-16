let score = "55";

// "33" => 33
// "33aa33" => NaN
// true => 1; false => 0;

let isNumber = Number(score);

console.log("Number is", isNumber);

let userName = 10;

let isString = String(userName);

console.log("String is", isString);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// -------------------------------------------------------------------------
console.log(1 + "1"); // 11
console.log("1" + 1 + 1); // 111
console.log(1 + 1 + "1"); // 21
// _________________________________________________________________________

console.log(+true); // 1
console.log(+""); // 0

// -------------------------------------------------------------------------
