// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt

person.name = 'Matt'
console.log(person)
// 2. Remove the size property from the person

delete person.size
console.log('This is with the removal of the person property', person)

// 3. Increase the person's age by 11

person.age = person.age + 11
console.log('This is the persons age after making changes', person.age)

// 4. Add an instruments property to the person, initialised as an empty array

person.instruments = []

console.log(person)
// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals

person.instruments = ['Guitar', 'Piano', 'Vocals']
console.log(person.instruments)

// 6. Using an index on the instruments array, set the mainInstrument variable below

const mainInstrument = person.instruments[2]
console.log('This is the main instrument', mainInstrument)
// to the third instrument in the array

// 7. Add a profession property to the person, which is an object

person.profession = {}
console.log(person)

// 8. Add a name property to the profession object with the value Musician

person.profession.name = 'Musician'
console.log(person)

// 9. Add a friends property to the person, which is an empty array

person.friends = []

// 10. Add two objects to the persons friends array with the following properties:
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43

person.friends[0] = { name: 'Chris', age: 46 }
person.friends[1] = { name: 'Dom', age: 43 }

// person.friends.FriendTwo = { Name: 'Dom', age: 43 }
console.log(person.friends)

// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = person.friends[0].name
console.log(bestFriend)

console.log(person)
// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
