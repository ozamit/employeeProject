import { TestBed } from '@angular/core/testing';

import { SendmailMessageService } from './sendmail-message.service';

describe('SendmailMessageService', () => {
  let service: SendmailMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendmailMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
