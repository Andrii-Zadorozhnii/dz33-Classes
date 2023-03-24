
//1) Ось реалізація класу Circle:

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

// Демонстрація властивостей та методів
const c = new Circle(5);
console.log(c.radius); // Вивід: 5
console.log(c.diameter); // Вивід: 10
console.log(c.area()); // Вивід: 78.5
console.log(c.length()); // Вивід: 31.4

c.radius = 7;
console.log(c.radius); // Вивід: 7
console.log(c.diameter); // Вивід: 14
console.log(c.area()); // Вивід: 153.86
console.log(c.length()); // Вивід: 43.96

//2) Ось реалізація класу Marker та RefillableMarker:

class Marker {
    constructor(color, inkPercent) {
        this.color = color;
        this.inkPercent = inkPercent;
    }

    write(text) {
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ') {
                this.inkPercent -= 0.5;
                if (this.inkPercent < 0) {
                    this.inkPercent = 0;
                    break;
                }
            }
        }
        console.log(`${text} (${this.color})`);
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkPercent = 100;
    }
}

// Демонстрація методів
const m = new Marker('blue', 50);
m.write('Hello world'); // Вивід: Hello (blue)

const rm = new RefillableMarker('red', 20);
rm.write('JavaScript is fun'); // Вивід: JavaScript (red)
rm.refill();
rm.write('JavaScript is fun'); // Вивід: JavaScript is fun (red)

//3) Ось реалізація класу Employee та EmpTable:

class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "<table>\n";
        html += "<tr><th>Name</th><th>Position</th></tr>\n";
        for (let i = 0; i < this.employees.length; i++) {
            html += `<tr><td>${this.employees[i].name}</td><td>${this.employees[i].position}</td></tr>\n`;
        }
        html += "</table>";
        return html;
    }
}

// Демонстрація класу EmpTable
const employees = [new Employee('John', 'Manager'), new Employee('Jane', 'Teller'), new Employee('Bob', 'Loan Officer')];
const table = new EmpTable(employees);
console.log(table.getHtml());