
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


function show(username = "Default User", role = "Default role", theme = "Default theme") {

  return `${username} your role is ${role} and your theme is ${theme}`;

}


console.log(show("Mahmoud","Developer", "Red"));
console.log(show("Mahmoud","Developer"));
console.log(show("Mahmoud"));
console.log(show());
*/


/****************************Lesson nine**********************/
/* Rest parameters to handle dyanamic parameters


function sum(...z){
  console.log("Z", z);
  let sum = 0;
  z.forEach((item, i) => {
      sum+=item;
    });
  return sum;
}


console.log(sum(4,1,2,3,4,28));
*/

/****************************Lesson ten & eleven**********************/
/* string methods
startsWith => string.startsWith(search string, position = 0)
endsWith => string.endsWith(search string, position = string.length)
-----
includes => string.includes(search string, position=0)
repeat => string.repeat(search string, position=0)

let name = 'Mahmoud@gmail.com';

console.log(name.repeat(2));
*/


/****************************Lesson twelve, thirteen, fourteen & fifteen**********************/
/*
Destructruing
- Object
- Array
- Parameter

/////////////////OBJECT//////////////////////
let name = 'Default',
    age = 'Default',
    gender = 'Default';

let user = {
  name:'Mahmoud',
  gender: 'Male',
  age: 36,
  city: 'Zifta',
  langs :{
    html: '70',
    css: '50'
  }
};

let mahmoud = user;

({name: n = "Savioc", gender: g, age: a = 15, city: c, langs: {html,css}} = user);  //reassign variables
({html,css} = user.langs);

    console.log(`my name is ${n} sex is ${g} age is ${a} html language ${html}`);
    console.log(`${html} ${css}`);
    console.log(`my name is ${mahmoud.name}`);*/

/////////////////Arrays//////////////////////


const players = ["Sala", "Trika","Mido"];
console.log(...players);
const   [s , , m ] = players;

console.log(`${s}, ${m}`);
