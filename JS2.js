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
// console.log(circle3.draw);

// Getting & Setter
const person= {
    firstName: 'Tim',
    lastName: 'H',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    country: 'China',
    city: 'HK',
    get location() {
        return `${person.country} ${person.city}`;
    },
    set location(value) {
        const parts = value.split(' ');
        this.country = parts[0];
        this.city = parts[1];
    }

};
// getters => access properties
// setters => change (mutate) them

person.fullName = 'John Smith';
person.fullName = 'Haruka Ichinose';
person.location = 'Japan Yokohama';

console.log(person);
// console.log(`${person.firstName} ${person.lastName}`);

// Value Type vs. Reference Type
let x = {value: 10};
let y = x;

x.value = 20;

// Example 1
 let number = 10;

 function increase(number) {
     number++;
 }

 increase(number);
 console.log(number);

// Example 2

let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);

// local vs Global

const color = 'red';
function start() {
    const message1 = 'hi';
    const color = 'blue';
    console.log(color);
    // if (true) {
    //     const another1 = 'bye';
    // }
    // // console.log(another1);    
    // for (let i = 0; i < 5; i++) {
    //     console.log(i);
    // }
    // console.log(i);
}

function stop() {
    const message1 = 'bye';
}

start();
// console.log(message1);

// exercise - value type vs reference type

function square(number) {
    return number * number;
}

const myNumber = 3;
console.log(square(myNumber));   // Expects 9
console.log(myNumber);   // Expects 3


function squareNumbers(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = numArray[i] * numArray[i];
    }
}

const myNumArray = [3, 1, 5, 7, 2];
squareNumbers(myNumArray);
console.log(myNumArray); 

// let vs. var

function start() {
    for (var i = 0; i < 5; i++)
    // console.log(i);
    if (true) {
        let color4 = 'white';
    }
//     console.log(i);
        // console.log(color4);
}

// var
// ES6 (ES2015): let, const => block-scoped

start();

var color6 = 'red';
let age = 30;

function sayHi() {
    console.log('hi');
}

// Cloning an Object

const circle4 = {
    radius: 1,
    // color: 'gold',
    draw() {
        console.log('draw');
    }
};

// const another2 = {};
// for(let key in circle4)
//     another2[key] = circle4[key];

// const another2 = Object.assign({
    //     color: 'gold'
    // }, circle4);
    
    const another2 = {color: 'gold', ...circle4};
console.log(another2);

// this keyword

// method -> obj
// function - global (window, global)

const video = {
    title:'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title,tag);
        }, this);
    }
    // play() {
    //     console.log(this);
    // }
};
video.showTags();


// function Video(title) {
    //     this.title = title;
    //     console.log(this);
    // }
    
    // const v = new Video('b');
    
    // function playVideo() {
        //     console.log(this);
        // }
        
        // playVideo();
        // video.stop = function() {
            //     console.log(this);
            // };
            
            // video.stop();
            // video.play();
    
 // Javascript Templete literals

//  String prmitive
const message2 = 'This is my\n' + 'first message';

// Object {}
// Boolean true, false
// String '', ""
// Template ``

const name4 = 'Haruka';
const another3 = 
// `This is my 
// 'first' message`;
`Hi ${name4} ${3+3}, 

Thank you for joining my mailing list.

Regards,
Tim`;

console.log(another3);

const name6 = 'Haruka';
const yellowCard = 0
const message3 = 
`Hi ${name6} 

Your yellow card is cancelled, so the total number of yellow cards is ${yellowCard}

Regards,
Tim`;

console.log(message3);

