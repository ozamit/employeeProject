import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
// import { EMPLOYEE } from '../list_employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employee-routing',
  templateUrl: './employee-routing.component.html',
  styleUrls: ['./employee-routing.component.css']
})
export class EmployeeRoutingComponent implements OnInit {

    employees: Employee[] = [];
    
    selectedEmployee?: Employee;
    onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.messageService.add(`Employee Component: Selected employee id=${employee.id}`);
    }
    
      constructor(private employeeService: EmployeeService, private messageService: MessageService) { }
      getEmployees(): void {
      this.employeeService.getEmployees()
     .subscribe(employees => this.employees = employees);
      }
    
      ngOnInit(): void {
        this.getEmployees()
      }
      
    }