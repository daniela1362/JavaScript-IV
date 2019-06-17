// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello, my name is {$this.name}, I am from {$this.location}`;
    }
}

fred = {
    name: 'Fred',
    location: 'Bedrock',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
    }
fred = {
    name: 'Kat',
    location: 'Alaska',
    age: 33,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Keep your feet on the ground`
    }

class Instructor{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.specialty = attributes.speciality;
        this.favLanguage= attributes.language;
        this.catchphrase = attributes.catchphrase;
    }
    demo(){
        return `Hello, my name is {$this.name}, I am from {$this.location}`;
    }
    grade(){
        return `Hello, my name is {$this.name}, I am from {$this.location}`;
    }
}