
/****************************Lesson one to three**********************/
/*
let
-Block Scope
-Accessing vars before decleration will return refrence error
- Doesn't create properties in the window Object
,
const
-Block Scope
-Cann't be redeclerared but can be reassign
-Accessing vars before decleration will return refrence error
- Doesn't create properties in the window Object

VS

var
-Function Scope
-Can be redeclerared
-Accessing vars before decleration will return undefined
- create properties in the window Object
*/

/****************************Lesson four & five**********************/
/*
  Arrow Function

//with no parameters
let ar1Function = _ => 2;

//with one parameters
let ar2Function = x => x;

//with more than one parameters
let ar3Function = (x,y) => x*y;


//this with arrow function is referring to the function scope
*/

/****************************Lesson six**********************/
/*
Template literals  `   `
using it is making things more eaiser

*/

/****************************Lesson seven**********************/
/*
Spread Operator.....      === applay at old JS

///// Array COPY using spread/////
let arr = ["mahmoud", "ahmed", "sayed"];
let arr1 = [...arr];
arr1.push("samir");
console.log(arr);
console.log(arr1);
////////////////////////

*/

/****************************Lesson eight**********************/

/*
Default Parameters
*/

function show(username = "Default User", role = "Default role", theme = "Default theme") {

  return `${username} your role is ${role} and your theme is ${theme}`;

}


console.log(show("Mahmoud","Developer", "Red"));
console.log(show("Mahmoud"));
