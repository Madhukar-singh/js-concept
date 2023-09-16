const accountId = 145;
let accountEmail = "singhmadhukar11@gmail.com";
var accountPassword = "123456";
accountCity = "jaipur";
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hdfc@g,ail.com";
accountPassword = "12344342";
accountCity = "indore";

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
