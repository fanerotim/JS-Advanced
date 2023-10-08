class Company {

    departments = {};

    addEmployee(name, salary, position, department) {

        if (name === '' || name === undefined || name === null ||
            salary === '' || salary === undefined || salary === null || salary < 0 ||
            position === '' || position === undefined || position === null ||
            department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []; 
        } 

        let currentEmployee = {
            name,
            salary,
            position,
        }
        
        this.departments[department].push(currentEmployee);
        return `New employee is hired. Name: ${name}. Position: ${position}`; 
    }

    bestDepartment() {
        let departmentLength = 0;
        let averageSalaryObj = {};
        let totalDepartmentSalary = 0;
        for (let item in this.departments) {
            departmentLength = this.departments[item].length;
            for (let inner of this.departments[item]) {
                totalDepartmentSalary += inner.salary;
            }
            averageSalaryObj[item] = totalDepartmentSalary / departmentLength;
            totalDepartmentSalary = 0; 
        }
        averageSalaryObj = Object.entries(averageSalaryObj).sort((a, b) => b[1] - a[1]);
        let bestDepartment = averageSalaryObj[0][0] 
        let bestAverageSalary = averageSalaryObj[0][1];

        let result = `Best Department is: ${bestDepartment}\n`;
        result += `Average salary: ${(bestAverageSalary).toFixed(2)}`;
        
        let sortedEmployees = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        for (let employee of sortedEmployees) {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`
        }
        return result;
    } 
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

