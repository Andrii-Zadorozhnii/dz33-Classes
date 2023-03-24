/*

3) Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

*/

// class Employee {
//     constructor(name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.salary = salary;
//     }
// }

// class EmpTable {
//     constructor (employees){
//         this.employees = employees;
//     }

//     getHtml(){
//         let table = document.querySelector('.table');
//         table.document.createElement('table');

//     }
// }

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = "";
        html += "Name_____Position_____Salary\n";
        for (let i = 0; i < this.employees.length; i++) {
            html += `${this.employees[i].name}_____${this.employees[i].position}_____${this.employees[i].salary}\n`;
        }

        return html;
    }
}

const employees = [new Employee('John', 'Manager', '3200'), new Employee('Jane', 'Teller', '2100'), new Employee('Bob', 'Loan Officer', '2700')];
const table = new EmpTable(employees);
console.log(table.getHtml());