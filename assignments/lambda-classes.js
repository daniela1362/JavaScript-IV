// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.hometown;
    }
    speak(){
        return `Hello, my name is {$this.name}, I am from {$this.location}`;
    }
}