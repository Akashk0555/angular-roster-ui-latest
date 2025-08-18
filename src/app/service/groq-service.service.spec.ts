import { TestBed } from '@angular/core/testing';

import { GroqServiceService } from './groq-service.service';

describe('GroqServiceService', () => {
  let service: GroqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
