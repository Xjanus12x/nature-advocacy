import { TestBed } from '@angular/core/testing';

import { OtherProjectsService } from './other-projects.service';

describe('OtherProjectsService', () => {
  let service: OtherProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
