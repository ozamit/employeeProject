import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { EmployeeService } from '../app/employee.service';
import { EmployeesComponent } from './employees/employees.component';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  constructor(public router: Router) { }
  
  }

  