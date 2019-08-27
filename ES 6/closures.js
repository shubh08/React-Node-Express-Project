//Closures
const func1 = () => {
    let greet =  "Hi Shubham";
    const func2 = () =>{
        console.log(greet);
    }
    return func2;
}

const test = func1();
test();

// Currying

const multiply = (a) => (b) => a*b;

const multiplyBy5 = multiply(5);
console.log(multiplyBy5(6));

//Time Pass

let x = 10;

const func3 = () => {x = 30;
console.log(x)};
func3();
console.log(x);


const arr1 = [2,4,6,8];

const double = [];
arr1.forEach((num) => {
double.push(num*2);
});

console.log(double);

//map filter and reduce