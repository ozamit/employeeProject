import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
    { id: 1234567891, fname: 'Bob', lname: 'Marley', dob: '1/1/90', salary: 1000 , email: 'Bob@mail.com'},
    { id: 1234567892, fname: 'Jennifer', lname: 'Lopez', dob: '1/2/90', salary: 12000, email: 'Jennifer@mail.com'},
    { id: 1234567893, fname: 'David', lname: 'Beckham', dob: '1/3/90', salary: 14000, email: 'David@mail.com'},
    { id: 1234567894, fname: 'Elon', lname: 'Musk', dob: '1/4/90', salary: 16000, email: 'Elon@mail.com'},
    { id: 1234567895, fname: 'Donald', lname: 'Trump', dob: '1/5/90', salary: 18000, email: 'Donald@mail.com'},
    { id: 1234567896, fname: 'Johnny', lname: 'Depp', dob: '1/6/90', salary: 20000, email: 'Johnny@mail.com'},
    { id: 1234567897, fname: 'Cristiano', lname: 'Ronaldo', dob: '1/7/90', salary: 22000, email: 'Cristiano@mail.com'}
    ];
    return {employees};
  }
  
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 12768733;
  }
}