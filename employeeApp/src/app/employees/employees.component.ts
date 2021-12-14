import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EMPLOYEE } from '../list_employees';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  // employees = EMPLOYEE;
  employees: Employee[] = [];


  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
}

  constructor(private employeeService: EmployeeService) { }
  getEmployees(): void {
  this.employeeService.getEmployees()
 .subscribe(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees()
  }
  
}
