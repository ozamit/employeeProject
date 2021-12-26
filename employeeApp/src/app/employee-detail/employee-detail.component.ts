import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { SendmailComponent } from '../sendmail/sendmail.component';
import { OpenSendmailBoxService } from '../open-sendmail-box.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  open_sendmail_box: string = ""
  // open_sendmail_box_action: string = ""

  open_sendmail_func(open_sendmail_box: string) {
    this.open_sendmail_box = "please open send mail box"
    this.OpenSendmailBoxService.open_sendmail("open send mail box")
  }

  public href: string = "";

  goBack(): void {
    this.location.back();
    }

  save(): void {
    if (this.employee) {
      this.employeeService.updateEmployee(this.employee)
      .subscribe(() => this.goBack());
      }
    }  
  
  static clicked: string;

  constructor(
    public OpenSendmailBoxService: OpenSendmailBoxService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    public location: Location,
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployee();
    this.href = this.router.url;
  }

  getEmployee(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
     }

  @Input() employee?: Employee;
  }

