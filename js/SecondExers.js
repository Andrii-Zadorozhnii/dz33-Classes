/*

2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; 
текст виводиться доти, доки в маркері є чорнило; 
один не пробільний символ — це 0,5 % чорнил у маркері).

Реалізуй клас, що описує маркер, який можна перезаправляти. 
Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.

*/

class Marker {
    constructor(world, color, inkPersent) {
        this.color = color;
        this.inkPersent = inkPersent;
        this.world = world;
    }

    writeText(text) {

        let consumptionPerLetter = 0.5;
        let requestInk = 0;
        let totalLetters = 0;

        for (let i = 0; i < text.length; i++) {
            if (text[i] === " ") {
                totalLetters += 0;
            } else if (text[i] !== " ") {
                totalLetters += 1;
            }
        }
        console.log("Total letters in:", this.world, " is:", totalLetters);
        let finalRequestInk = totalLetters * consumptionPerLetter;
        if (finalRequestInk <= this.inkPersent) {
            console.log("You will consime ", finalRequestInk, "% of ink for this write")
            console.log("You have inaf ink for print: ", this.world, "by", this.color, "color");
        } else {
            console.log("You don't have inaf ink for write: ", this.world);
            console.log("You should to reharge your pen");
            // console.log(`You can write only (${} )letters, but you wanna right ${totalLetters}}`)
        }
    }
}

class RechargableMarker extends Marker {
    constructor(world) {
        super(world);
    }

    refill() {
        this.inkPercent = 99999999999999999999;
    }
}
const markerQuestion = confirm("Do you have a rechargable marker?");
const world = prompt("Write a world: ");
const color = prompt("write a marker color");
const inkPersent = prompt("Write ink persent");

const standartMarker = new Marker(world, color, inkPersent);
const rechargableMarker = new RechargableMarker(world, color, inkPersent);

if (markerQuestion) {
    rechargableMarker.writeText(world);
} else {
    standartMarker.writeText(world);
}