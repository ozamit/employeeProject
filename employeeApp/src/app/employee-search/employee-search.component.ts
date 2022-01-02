import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {  debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
 selector: 'app-employee-search',
 templateUrl: './employee-search.component.html',
 styleUrls: [ './employee-search.component.css' ]
})

export class EmployeeSearchComponent implements OnInit {

 employees$!: Observable<Employee[]>;
 private searchTerms = new Subject<string>();
 searchTerm = ['by id', 'by last name', 'by first name', 'by salary'];
 searchtermnew = 0
 
 // Push a search term into the observable stream.
 search(term: string, searchterm: string): void {
 this.searchTerms.next(term);

 switch (searchterm) {
    case ('by id'): {
      this.searchtermnew = 0
      break
    }
    case ('by last name'): {
      this.searchtermnew = 1
      break
    }
    case ('by first name'): {
      this.searchtermnew = 2
      break
    }
    case ('by salary'): {
      this.searchtermnew = 3
      break
    }
    }
 }

 ngOnInit(): void {
 this.employees$ = this.searchTerms.pipe(
 // wait 300ms after each keystroke before considering the term
 debounceTime(300),
 // ignore new term if same as previous term
 distinctUntilChanged(),
 // switch to new search observable each time the term changes
 switchMap((term: string) => this.employeeService.searchEmployees(term,this.searchtermnew)), );
 }

 constructor(private employeeService: EmployeeService) {}

}