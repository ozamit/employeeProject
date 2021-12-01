import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEE } from '../list_employees';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = EMPLOYEE;

  selectedEmployee?: Employee;
  onSelect(employee: Employee): void {
  this.selectedEmployee = employee;
}

  constructor() { }

  ngOnInit(): void {
  }
  
}
