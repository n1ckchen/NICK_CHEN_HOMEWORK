const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  const ageArr = Object.values(people).map(person => person.age);
  const totalAge = ageArr.reduce((sum, age) => {
    sum + age
  }, 0);
  return totalAge / ageArr,length;
};
