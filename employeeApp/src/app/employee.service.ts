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

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
    tap(_ => this.log(`updated employee id=${employee.id}`)),
    catchError(this.handleError<any>('updateEmployee'))
    );
    }

    addEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.employeesUrl, employee,
     this.httpOptions).pipe(
      tap((newEmployee: Employee) => this.log(`added Employee w/
     id=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
      );
      }

    deleteEmployee(id: number): Observable<Employee> {
        const url = `${this.employeesUrl}/${id}`;
       
        return this.http.delete<Employee>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted Employee id=${id}`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
        );
        }

        searchEmployees(term: string, searchterm: number): Observable<Employee[]> {
          if (!term.trim()) {
          // if not search term, return empty employee array.
          return of([]);
          }
          var searchtermnew = ''
    if (searchterm==0) {searchtermnew='id'}
    if (searchterm==1) {searchtermnew='lname'}
    if (searchterm==2) {searchtermnew='fname'}
    if (searchterm==3) {searchtermnew='salary'}

          return this.http.get<Employee[]>(`${this.employeesUrl}/?${searchtermnew}=${term}`).pipe(tap(x => x.length ?
          this.log(`found Employees matching "${term}"`) :
          this.log(`no Employees matching "${term}"`)),
          catchError(this.handleError<Employee[]>('searchEmployees', []))
          );
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

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

