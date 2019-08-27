var login = {
    username: "Shubham",
    password: "aim"
};

var database = [login];

var newsfeed = [{
    username:"shubh",
    timeline:"Hi, Its a sunny day in Cali"
},{
    username:"kumar",
    timeline:"Hi, Its coding marathon in Library"
},{
    username:"tarjan",
    timeline:"That was a good movie"
}];
var buttons = document.getElementsByTagName("button")[0];

var x = 10;
var y = 20;

var func1 = function(){
    x = 11;
    y = 30;
    console.log("x value is",x,"y value is",y);
    
}

if(true)
{ x=26;
    y=36;
    console.log(x);
    console.log(y);
}
console.log(x);
//Destructring
const student = {
    name:"shubh",
    age:25
};

const {name, age} = student;
// String Literals
const greetingBest = `Hello ${name}, you are doing great and keep doing that. Your age is still ${25} and you still have loads 
of free time !!`;

console.log(greetingBest);

// Default Params

function greet(name="Shubh",age=25, pet="dog"){
    return `Hello ${name}, you seem to be ${age}. What a nice ${pet} you have!!`
}
