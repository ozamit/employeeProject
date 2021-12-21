import { Injectable } from '@angular/core';
import { EmployeeDetailComponent } from '../app/employee-detail/employee-detail.component';
import { SendmailComponent } from '../app/sendmail/sendmail.component';

@Injectable({
  providedIn: 'root'
})
export class OpenSendmailBoxService {
  
  open_sendmail_box_action: string = ""

  open_sendmail(open_sendmail: string) {
  this.open_sendmail_box_action = open_sendmail
  }

  constructor() { }
}

