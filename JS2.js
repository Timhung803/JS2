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

//if ..... else
// Hour
// If hour is between 6 am and 12 pm: Good morning!
// If hour is between 12 pm and 6 pm: Good afternoon!
// Otherwise: Good evening!

let hour = 12;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >=12 && hour < 18)
    console.log('Good afternoon!');
else 
    console.log('Good evening!');

//Loops - For
// for (initialExpression; condition; incrementExpression)
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i);
// }

// for (let i = 1; i <=5; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

for (let i = 5; i >= 1; i--)
    if (i % 2 !==0) console.log(i);

// Factory Functions //
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function() {
//         console.log('draw');
//     }
// };

function createCircle (radius) {
    return {
        radius,
        draw() {
            console.log('Draw this circle');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);
circle1.draw();

// Constructor Function
// Camel Notation: oneTwoThreeFour (Factory Function)
// Pascal Notation: OneTwoThreeFour (Constructor Function)
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    } 
}

const circle = new Circle(1);
console.log(circle.radius);
const circle3 = new Circle(2);
console.log(circle3.radius);
// circle3.draw();
console.log(circle3.draw);