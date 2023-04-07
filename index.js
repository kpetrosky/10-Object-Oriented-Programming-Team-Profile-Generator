// const Intern = require("./intern");
// const team = require("./team");

// const intern1 = new Intern("Jared");
// const intern2 = new Intern("Alec");
// const intern3 = new Intern("Grace");
// const intern4 = new Intern("Tammer");
// const intern5 = new Intern("John");

// const team = new team();

// team.addIntern(intern1);
// team.addIntern(intern2);
// team.addIntern(intern3);
// team.addIntern(intern4);
// team.addIntern(intern5);


// console.log(team.teamMate);
// console.log("\n");

// const newEmployee = new teamMate("Jared");
// dayCare.addChild(child4);




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

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'managers name',
        message: 'What is manager name?',
      },
    {
      type: 'input',
      name: 'employees name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'employee id',
      message: 'What is the employee id?',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is the office number?',
      },
 
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
 // the team manager’s name, employee ID, email address, and office number