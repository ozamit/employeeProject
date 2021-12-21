import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SendmailMessageService {

  confirm: string = "";

  mailsent(confirm: string) {
    this.messageService.add(confirm)
  }

  constructor(public messageService: MessageService) { }
}
