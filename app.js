//announce game: "Our planet is being invaded by a hostile enemy. The time has come for you to lip sync for your life. Good luck and don't fuck it up."
//announce loser: “Impersonating Beyoncè is not your destiny, child.”
//announce winner: “By the power vested in me... by me... You are the winner!”


let playerHull = document.querySelector('#playerHull');
let playerFirePower = document.querySelector('playerFirePower');
let playerAccuracy = document.querySelector('#playerAccuracy');

let enemyHull = document.querySelector('#enemyHull');
let enemyFirePower = document.querySelector('enemyFirePower');
let enemyAccuracy = document.querySelector('#enemyAccuracy');

//stats
const enemyShip = {
    hull: [3, 4, 5, 6],
    firepower: [2, 3, 4],
    accuracy: [.6, .7, .8],
}

//random

randomHull = enemyShip.hull[Math.floor(Math.random() * enemyShip.hull.length)];
randomFirepower = enemyShip.firepower[Math.floor(Math.random() * enemyShip.firepower.length)];
randomAccuracy = enemyShip.accuracy[Math.floor(Math.random() * enemyShip.accuracy.length)];

class enemyInvaders {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}







































































// console.log('window is loaded');

// alert(
//     'Welcome to Space Battle.\nYou are charged with defending the galaxy against the evil alien enemy.'
// )
// // Objects

// const hero = {
//     hull: 20,
//     firepower: 5,
//     accuracy: .7,
//     isAlive: true,
//     attack(target) {
//         let ranNum = Math.random();
//         console.log(`Accuracy threshold is ${ranNum}`);
//         if (ranNum < this.accuracy) {
//             console.log(`It's a direct hit!! Well done Capitan!`);
//             target.hull = target.hull - this.firepower;
//             console.log(`alien has ${target.hull} hull points left.`);
//             if (target.hull <= 0) {
//                 target.isAlive = false;
//                 console.log(`Alien ship is destroyed you have saved the Universe from complete destruction!!`);

//             }
//         } else {
//             console.log(`you missed!`);
//         }
//     }
// }
// const alien = {
//     hull: Math.round((Math.random() * (6 - 3)) + 3),
//     firepower: Math.round((Math.random() * (4 - 2)) + 2),
//     accuracy: (Math.random() * (.8 - .6)) + .6, //for later figure out a way to make it to the hundredth?
//     isAlive: true,
//     attack(target) {
//         let ranNum = Math.random();
//         console.log(`Accuracy threshold is ${ranNum}`);
//         if (ranNum < this.accuracy) {
//             console.log(`You've been hit!`);
//             target.hull = target.hull - this.firepower;
//             console.log(`hero has ${target.hull} hull points left.`);
//             if (target.hull <= 0) {
//                 target.isAlive = false;
//                 console.log(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`);

//             }
//         } else {
//             console.log(`You dodged the attack!`);
//         }
//     }
// }
// const battle = (player, computer) => {
//     while (player.isAlive && computer.isAlive) {
//         player.attack(computer);
//         if (computer.isAlive) {
//             computer.attack(player);
//         }
//     }
// }