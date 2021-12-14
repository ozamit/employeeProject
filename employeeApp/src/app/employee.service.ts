import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE } from './list_employees';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(): Observable<Employee[]> {
    const employees = of(EMPLOYEE);
    return employees;
  }  
  constructor() { }
}