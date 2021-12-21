import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { SendmailMessageService } from '../sendmail-message.service'
import { MessageService } from '../message.service';
import { OpenSendmailBoxService } from '../open-sendmail-box.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  open_sendmail_box_action: string = ""

  sendmail() {
    this.SendmailMessageService.mailsent('mail sent');
  }

  constructor(public messageService: MessageService, public SendmailMessageService: SendmailMessageService, public OpenSendmailBoxService: OpenSendmailBoxService) { }

  ngOnInit(): void {
  }
  @Input() employee?: Employee;
}
