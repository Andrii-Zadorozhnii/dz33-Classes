/* 
1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.

Продемонструй роботу властивостей і методів.
*/



class Circle {

    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get diameter() {
        return this._radius * 2;
    }

    area() {
        return 3.14 * this._radius ** 2;
    }

    length() {
        return 2 * 3.14 * this._radius;
    }
}

// Продемонструй роботу властивостей і методів.

let c = new Circle(prompt("Write a number"));
console.log(c);

console.log("радіус кола: ", c.radius);

console.log("діаметр кола: ", c.diameter);

console.log("площa кола: ", c.area());

console.log("довжинa колa: ", c.length());

