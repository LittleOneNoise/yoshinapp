import { TestBed } from '@angular/core/testing';

import { JsonGrabberService } from './json-grabber.service';

describe('JsonGrabberService', () => {
  let service: JsonGrabberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonGrabberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
