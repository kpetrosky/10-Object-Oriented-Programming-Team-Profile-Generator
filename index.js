const Intern = require("./intern");
const team = require("./team");

const intern1 = new Intern("Jared", 3);
const intern2 = new Intern("Alec", 1);
const intern3 = new Intern("Grace", 2);
const intern4 = new Intern("Tammer", 2);
const intern5 = new Intern("John", 2);

const team = new team();

team.addIntern(intern1);
team.addIntern(intern2);
team.addIntern(intern3);
team.addIntern(intern4);
team.addIntern(intern5);


console.log(team.teamMate);
console.log("\n");

const child4 = new Child("Jared", 1);
dayCare.addChild(child4);

// Capacity reached, child not added
console.log(team.children);
console.log("\n");

dayCare.pickupChild("Tammer");

// Tammer is no longer at daycare
console.log(dayCare.children);
console.log("\n");

// Able to add Rosie now
dayCare.addChild(child4);
console.log(dayCare.children);
console.log("\n");

dayCare.pickupChild("Alec");

// Jan not added, he's above the age limit
const child5 = new Child("Jan", 20);
dayCare.addChild(child5);
console.log(dayCare.children);


// const Vehicle = require('./vehicle');

// class Boat extends Vehicle {
//   constructor(id, type, crew) {
//     super(id, 0, 'bwom');
//     this.type = type;
//     this.crew = crew;
//   }

//   useHorn() {
//     console.log(this.sound);
//   }

//   crewSoundOff() {
//     this.crew.forEach((member) => {
//       console.log(`${member} reporting for duty!`);
//     });
//   }
// }

// const boatPassengers = [
//   'Jared',
//   'Alec',
//   'Grace',
//   'Tammer',
//   'john',
// ];

// const boat = new Boat(16, 'sailboat', boatPassengers);

// console.log('---BOAT---');
// boat.printInfo();
// boat.useHorn();
// boat.crewSoundOff();