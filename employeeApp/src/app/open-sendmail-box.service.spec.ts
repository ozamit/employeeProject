import { TestBed } from '@angular/core/testing';

import { OpenSendmailBoxService } from './open-sendmail-box.service';

describe('OpenSendmailBoxService', () => {
  let service: OpenSendmailBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenSendmailBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
