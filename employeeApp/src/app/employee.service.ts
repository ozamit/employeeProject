import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE } from './list_employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEE);
    this.messageService.add('Employee Service message: all employees were updated');
    return employees;
  }  
  constructor(private messageService: MessageService) { }
}