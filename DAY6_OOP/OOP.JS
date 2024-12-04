const people = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 22 }
];



const peopleOver30 = people.filter(person => person.age > 30);

const namesOver30 = peopleOver30.map(person => person.name);

console.log(namesOver30);

//const nameOver30 = people.filter(person => person.age > 30).map(person => person.name);
// clg nameOver30

const peopleUnder25 = people.filter(person => person.age <= 25);
console.log(peopleUnder25);