
class Vehicle {

    constructor(type,modelName)
    {
        this.type = type;
        this.modelName = modelName;
    }

    introduce(){
        console.log(`We are talking about ${this.type} and the model is ${this.modelName}`);
    }
}


class Car extends Vehicle {

    constructor(type,modelName)
    {
        super(type,modelName);
    }

    features(){
        console.log(`The is a  ${this.type} type and the model is ${this.modelName}, which has 4 wheels drive suitable for all terrrain drive`);

    }
}

const car1 = new Car("Car","Camero");
const car2 = new Car ("Car", "Dodge");

car1.introduce();
car2.features();