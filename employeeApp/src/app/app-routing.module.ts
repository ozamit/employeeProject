import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRoutingComponent } from './employee-routing/employee-routing.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 { path: 'detail/:id', component: EmployeeDetailComponent },
 { path: 'home', component: EmployeesComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'employees2', component: EmployeeRoutingComponent },
 { path: 'search', component: EmployeeSearchComponent },
 { path: 'employees', component: EmployeesComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }