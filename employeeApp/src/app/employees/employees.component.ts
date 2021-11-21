import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee: Employee = {
    id: 318033743,
    fname: 'Alex',
    lname: 'Gorbachov'
    };

    employee1: Employee = {
      id: 123456789,
      fname: 'Amit',
      lname: 'Oz'
      };
   
}
