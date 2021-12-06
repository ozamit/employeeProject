import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';

import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FooterComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
