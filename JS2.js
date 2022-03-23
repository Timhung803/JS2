let checking = 'JS2';
console.log(checking);

// String
// String primitive
const message = 'This is my first message';


// String object
const another = new String('hi');

//Assignment 1
//Q1
let brand = 'Apple';
let productName = 'MacBook Air';
let price = 999.99;
let comeWithSSD = true;
let applications = ['VS','gooleChrome'];
let noOwners = false;

//Q2 a
console.log(brand);
//Q2 b
console.log(Math.round(price));
//Q2 c
applications[2]='Postman';
console.log(applications);
//Q2 d
let owners = ['Tim', 'Haruka', 'Vivi', 'Wendy'];
console.log(owners[1]);
//Q3 a
console.log(applications);
//Q3 b
console.log(applications[1]);
//Q3 c
let found = applications.findIndex(applications => applications === 'Postman');
console.log(found);
//Q4
function greeting (Owners) {
    console.log('Hello\, ' + 'I\'m the owner of ' + Owners + '\'s ' + 'computer');
}

greeting('Tim');

