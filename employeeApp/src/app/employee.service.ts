import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE } from './list_employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';  // URL to web api

  getEmployees(): Observable<Employee[]> {
    this.messageService.add('Employee Service message: all employees were updated!');
    return this.http.get<Employee[]>(this.employeesUrl)
    .pipe(
      tap(_ => this.log('fetched employees')),
      catchError(this.handleError<Employee[]>('getEmployees', []))
      );


    // const employees = of(EMPLOYEE);
    // this.messageService.add('Employee Service message: all employees were updated');
    // return employees;
  }  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployee(id: number): Observable<Employee> {
    // const employee = EMPLOYEE.find(h => h.id === id)!;
    // this.messageService.add(`Employee Service: fetched employee id=${id}`);
    // return of(employee);
    this.messageService.add(`Employee Service: fetched employee id=${id}`);
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
    tap(_ => this.log(`fetched employee id=${id}`)),
    catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
    }

  private log(message: string) {
    this.messageService.add(`Employee Service: ${message}`);
    }

  constructor(
    public messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    ) { }
}

